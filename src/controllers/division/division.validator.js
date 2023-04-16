const Joi = require("joi");
export const divisionForm = {
  body: {
    name: Joi.string().required(),
  },
};
