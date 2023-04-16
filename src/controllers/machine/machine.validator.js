const Joi = require("joi");
export const machineForm = {
  body: {
    name: Joi.string().required(),
    operation_number: Joi.string().required(),
    serial_number: Joi.string().required(),
    process_name: Joi.string().required(),
    maker: Joi.string().required(),
    release_year: Joi.number().required(),
    machine_type_id: Joi.number().required(),
    division_id: Joi.number().required(),
    department_id: Joi.number().required(),
    line_id: Joi.number().required(),
  },
};
