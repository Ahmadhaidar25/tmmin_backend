import jwt from "jsonwebtoken";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import axios from "axios";
import { User } from "../../models";
import { successResponse, errorResponse, uniqueId } from "../../helpers";

export const login = async (req, res) => {
  try {
    const user = await User.scope("withSecretColumns").findOne({
      where: { username: req.body.username },
    });
    if (!user) {
      throw new Error("User Tidak ditemukan");
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      throw new Error("Incorrect Password");
    }
    const token = jwt.sign(
      {
        user: {
          userId: user.id,
          username: user.username,
          createdAt: new Date(),
        },
      },
      process.env.SECRET
    );
    delete user.password;
    return successResponse(req, res, { user, token });
  } catch (error) {
    console.log(error);
    return errorResponse(req, res, error.message);
  }
};

export const profile = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findOne({ where: { id: userId } });
    return successResponse(req, res, { user });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const changePassword = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.scope("withSecretColumns").findOne({
      where: { id: userId },
    });

    const reqPass = crypto
      .createHash("md5")
      .update(req.body.oldPassword)
      .digest("hex");
    if (reqPass !== user.password) {
      throw new Error("Old password is incorrect");
    }

    const newPass = crypto
      .createHash("md5")
      .update(req.body.newPassword)
      .digest("hex");

    await User.update({ password: newPass }, { where: { id: user.id } });
    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
