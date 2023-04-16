const Joi = require("joi");
export const subMachineForm = {
  body: {
    code: Joi.string().required(),
    name: Joi.string().required(),
    machine_id: Joi.number().required(),
    division_id: Joi.number().required(),
    department_id: Joi.number().required(),
    line_id: Joi.number().required(),
    cell_id: Joi.number().required(),
  },
};
