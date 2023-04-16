import { v4 as uuidV4 } from "uuid";
import { errorResponse, successResponse } from "../../helpers";
import { Shop } from "../../models";

export const getShop = async (req, res) => {
  try {
    let condition = {};
    if (req.query.line_id) {
      condition = { line_id: req.query.line_id };
    }
    const data = await Shop.findAll({
      include: ["division", "department", "line"],
      where: condition,
    });
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveShop = async (req, res) => {
  try {
    const data = {
      uuid: uuidV4(),
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      company_id: req.body.company_id,
      plant_id: req.body.plant_id,
      division_id: req.body.division_id,
      department_id: req.body.department_id,
      line_id: req.body.line_id,
      cell_id: req.body.cell_id,
      created_by: parseInt(req.user.id),
    };
    const result = await Shop.create(data);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateShop = async (req, res) => {
  try {
    const result = await Shop.findOne({ where: { id: req.params.id } });
    result.name = req.body.name;
    result.description = req.body.description;
    result.company_id = req.body.company_id;
    result.plant_id = req.body.plant_id;
    result.division_id = req.body.division_id;
    result.department_id = req.body.department_id;
    result.line_id = req.body.line_id;
    result.cell_id = req.body.cell_id;
    result.save();
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const deleteShop = async (req, res) => {
  try {
    const result = await Shop.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
