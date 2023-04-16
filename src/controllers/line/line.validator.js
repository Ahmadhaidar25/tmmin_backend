const Joi = require("joi");
export const lineForm = {
  body: {
    name: Joi.string().required(),
    division_id: Joi.number().required(),
    department_id: Joi.number().required(),
    code: Joi.string().required(),
  },
};
