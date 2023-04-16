const Joi = require("joi");
export const saveForm = {
  body: {
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
  },
};
