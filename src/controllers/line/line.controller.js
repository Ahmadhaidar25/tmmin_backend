import { errorResponse, successResponse } from "../../helpers";
import { Line } from "../../models";
import { v4 as uuidv4 } from "uuid";

export const getLine = async (req, res) => {
  try {
    let condition = {};
    let include = ["division", "department", "plant", "company"];
    if (req.query.department_id) {
      condition = { department_id: req.query.department_id };
      include = [];
    }
    const data = await Line.findAll({
      include: include,
      where: condition,
    });
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveLine = async (req, res) => {
  try {
    const data = {
      uuid: uuidv4(),
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      code: req.body.code,
      company_id: req.body.company_id,
      plant_id: req.body.plant_id,
      division_id: req.body.division_id,
      department_id: req.body.department_id,
      created_by: parseInt(req.user.id),
    };
    const result = await Line.create(data);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateLine = async (req, res) => {
  try {
    const result = await Line.findOne({ where: { id: req.params.id } });
    result.name = req.body.name;
    result.description = req.body.description;
    result.code = req.body.code;
    result.company_id = req.body.company_id;
    result.plant_id = req.body.plant_id;
    result.division_id = req.body.division_id;
    result.department_id = req.body.department_id;
    result.save();
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const deleteLine = async (req, res) => {
  try {
    const result = await Line.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
