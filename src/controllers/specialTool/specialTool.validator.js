const Joi = require("joi");
export const specialForm = {
  body: {
    code: Joi.string().required(),
    name: Joi.string().required(),
  },
};
