const Joi = require("joi");
export const shopForm = {
  body: {
    name: Joi.string().required(),
    division_id: Joi.number().required(),
    department_id: Joi.number().required(),
    line_id: Joi.number().required(),
  },
};
