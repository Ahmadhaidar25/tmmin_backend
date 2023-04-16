import { errorResponse, successResponse } from "../../helpers";
import { Department } from "../../models";
import { v4 as uuidv4 } from "uuid";

export const getDepartment = async (req, res) => {
  try {
    let condition = {};
    let include = ["division", "plant", "company"];
    if (req.query.division_id) {
      condition = { division_id: req.query.division_id };
      include = [];
    }
    const data = await Department.findAll({
      include: include,
      where: condition,
    });
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveDepartment = async (req, res) => {
  try {
    const data = {
      uuid: uuidv4(),
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      company_id: req.body.company_id,
      plant_id: req.body.plant_id,
      division_id: req.body.division_id,
      created_by: parseInt(req.user.id),
    };
    const result = await Department.create(data);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateDepartment = async (req, res) => {
  try {
    const result = await Department.findOne({ where: { id: req.params.id } });
    result.code = req.body.code;
    result.name = req.body.name;
    result.description = req.body.description;
    result.company_id = req.body.company_id;
    result.plant_id = req.body.plant_id;
    result.division_id = req.body.division_id;
    result.save();
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const deleteDepartment = async (req, res) => {
  try {
    const result = await Department.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
