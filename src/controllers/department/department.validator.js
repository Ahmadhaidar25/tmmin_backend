const Joi = require("joi");
export const departmentForm = {
  body: {
    name: Joi.string().required(),
    division_id: Joi.number().required(),
  },
};
