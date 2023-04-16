import { errorResponse, successResponse } from "../../helpers";
import { TypeMachine } from "../../models";
import { v4 as uuidV4 } from "uuid";

export const getTypeMachines = async (req, res) => {
  try {
    const data = await TypeMachine.findAll();
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveTypeMachine = async (req, res) => {
  try {
    const data = {
      uuid: uuidV4(),
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
    };
    const result = await TypeMachine.create(data);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateTypeMachine = async (req, res) => {
  try {
    const result = await TypeMachine.findOne({ where: { id: req.params.id } });
    result.name = req.body.name;
    result.description = req.body.description;
    result.save();
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const deleteTypeMachine = async (req, res) => {
  try {
    const result = await TypeMachine.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
