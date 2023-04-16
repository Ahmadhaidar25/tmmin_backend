import { errorResponse, successResponse } from "../../helpers";
import { Plant } from "../../models";
import { v4 as uuidv4 } from "uuid";

export const getPlant = async (req, res) => {
  try {
    let condition = {};
    let include = "company";
    if (req.query.company_id) {
      condition = { company_id: req.query.company_id };
      include = [];
    }
    const data = await Plant.findAll({ include: include, where: condition });
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const savePlant = async (req, res) => {
  try {
    const body = {
      uuid: uuidv4(),
      company_id: req.body.company_id,
      code: req.body.code,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      description: req.body.description,
      created_by: parseInt(req.user.id),
    };
    const result = await Plant.create(body);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updatePlant = async (req, res) => {
  try {
    const result = await Plant.findOne({ where: { id: req.params.id } });
    result.name = req.body.name;
    result.company_id = req.body.company_id;
    result.adddress = req.body.adddress;
    result.phone = req.body.phone;
    result.description = req.body.description;
    result.save();
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const deletePlant = async (req, res) => {
  try {
    const result = await Plant.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
