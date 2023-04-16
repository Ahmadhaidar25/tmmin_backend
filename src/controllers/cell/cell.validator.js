const Joi = require("joi");
export const cellForm = {
  body: {
    name: Joi.string().required(),
    division_id: Joi.number().required(),
    department_id: Joi.number().required(),
    line_id: Joi.number().required(),
  },
};
