import { errorResponse, successResponse } from "../../helpers";
import { SpecialTool } from "../../models";
const uuid = require("uuid");

export const getSpecialTools = async (req, res) => {
  try {
    const data = await SpecialTool.findAll();
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveSpecialTool = async (req, res) => {
  try {
    const body = {
      uuid: uuid.v4(),
      code: req.body.code,
      name: req.body.name,
      description: req.body.description || "",
      status: req.body.status,
      is_available: req.body.is_available,
      created_by: parseInt(req.user.id),
    };
    const result = await SpecialTool.create(body);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateSpecialTool = async (req, res) => {
  try {
    const result = await SpecialTool.findOne({ where: { id: req.params.id } });
    result.name = req.body.name;
    result.description = req.body.description;
    result.status = req.body.status;
    result.is_available = req.body.is_available;
    result.save();
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const deleteSpecialTool = async (req, res) => {
  try {
    const result = await SpecialTool.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
