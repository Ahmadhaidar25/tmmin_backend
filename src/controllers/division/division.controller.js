import { errorResponse, successResponse } from "../../helpers";
import { Division } from "../../models";
import { v4 as uuidv4 } from "uuid";

export const getDivisions = async (req, res) => {
  try {
    let condition = {};
    let include = ["company", "plant"];
    if (req.query.plant_id) {
      condition = { plant_id: req.query.plant_id };
      include = [];
    }
    const companies = await Division.findAll({
      include: include,
      where: condition,
    });
    return successResponse(req, res, companies);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveDivision = async (req, res) => {
  try {
    const body = {
      uuid: uuidv4(),
      company_id: parseInt(req.body.company_id),
      plant_id: parseInt(req.body.plant_id),
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      created_by: parseInt(req.user.id),
    };
    const result = await Division.create(body);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateDivision = async (req, res) => {
  try {
    const result = await Division.findOne({ where: { id: req.params.id } });
    result.company_id = parseInt(req.body.company_id);
    result.plant_id = parseInt(req.body.plant_id);
    result.code = req.body.code;
    result.name = req.body.name;
    result.description = req.body.description;
    result.save();
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const deleteDivision = async (req, res) => {
  try {
    const result = await Division.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
