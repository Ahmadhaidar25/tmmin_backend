import { errorResponse, successResponse } from "../../helpers";
import { Cell } from "../../models";
import { v4 as uuidv4 } from "uuid";

export const getCells = async (req, res) => {
  try {
    let condition = {};
    let include = ["division", "department", "line", "company", "plant"];
    if (req.query.line_id) {
      condition = { line_id: req.query.line_id };
      include = [];
    }
    const data = await Cell.findAll({
      include: include,
      where: condition,
    });
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveCell = async (req, res) => {
  try {
    const data = {
      uuid: uuidv4(),
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      company_id: req.body.company_id,
      plant_id: req.body.plant_id,
      division_id: req.body.division_id,
      department_id: req.body.department_id,
      line_id: req.body.line_id,
      created_by: parseInt(req.user.id),
    };
    const result = await Cell.create(data);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateCell = async (req, res) => {
  try {
    const result = await Cell.findOne({ where: { id: req.params.id } });
    result.code = req.body.code;
    result.name = req.body.name;
    result.description = req.body.description;
    result.company_id = req.body.company_id;
    result.plant_id = req.body.plant_id;
    result.division_id = req.body.division_id;
    result.department_id = req.body.department_id;
    result.line_id = req.body.line_id;
    result.save();
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const deleteCell = async (req, res) => {
  try {
    const result = await Cell.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
