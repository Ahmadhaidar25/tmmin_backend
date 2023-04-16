import { errorResponse, successResponse } from "../../helpers";
import { SubMachine } from "../../models";
import { v4 as uuidv4 } from "uuid";

export const getSubMachines = async (req, res) => {
  try {
    const data = await SubMachine.findAll({
      include: ["division", "department", "line", "machine", "cell"],
    });
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveSubMachine = async (req, res) => {
  try {
    const data = {
      uuid: uuidv4(),
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      machine_id: req.body.machine_id,
      company_id: req.body.company_id,
      plant_id: req.body.plant_id,
      division_id: req.body.division_id,
      department_id: req.body.department_id,
      line_id: req.body.line_id,
      cell_id: req.body.cell_id,
      created_by: parseInt(req.user.id),
    };
    const result = await SubMachine.create(data);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateSubMachine = async (req, res) => {
  try {
    const result = await SubMachine.findOne({ where: { id: req.params.id } });
    result.name = req.body.name;
    result.machine_id = req.body.machine_id;
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
export const deleteSubMachine = async (req, res) => {
  try {
    const result = await SubMachine.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
