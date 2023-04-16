const Joi = require("joi");
export const save = {
  body: {
    code: Joi.string().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
  },
};
