import { errorResponse, successResponse } from "../../helpers";
import { Machine } from "../../models";
import { v4 as uuidv4 } from "uuid";

export const getMachines = async (req, res) => {
  try {
    const data = await Machine.findAll({
      include: ["division", "department", "line", "type_machine"],
    });
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveMachine = async (req, res) => {
  try {
    const data = {
      uuid: uuidv4(),
      code: req.body.code,
      name: req.body.name,
      pic: req.body.pic,
      operation_number: req.body.operation_number,
      serial_number: req.body.serial_number,
      process_name: req.body.process_name,
      release_year: req.body.release_year,
      maker: req.body.maker,
      machine_type_id: req.body.machine_type_id,
      description: req.body.description,
      company_id: req.body.company_id,
      plant_id: req.body.plant_id,
      division_id: req.body.division_id,
      department_id: req.body.department_id,
      line_id: req.body.line_id,
      cell_id: req.body.cell_id,
      created_by: parseInt(req.user.id),
    };
    const result = await Machine.create(data);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateMachine = async (req, res) => {
  try {
    const result = await Machine.findOne({ where: { id: req.params.id } });
    result.name = req.body.name;
    result.pic = req.body.pic;
    result.operation_number = req.body.operation_number;
    result.serial_number = req.body.serial_number;
    result.process_name = req.body.process_name;
    result.release_year = req.body.release_year;
    result.maker = req.body.maker;
    result.machine_type_id = req.body.machine_type_id;
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
export const deleteMachine = async (req, res) => {
  try {
    const result = await Machine.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
