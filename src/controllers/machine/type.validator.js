const Joi = require("joi");
export const typeMachineForm = {
  body: {
    code: Joi.string().required(),
    name: Joi.string().required(),
  },
};
