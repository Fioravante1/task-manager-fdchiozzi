const Joi = require('@hapi/joi');

const schemaTasks = Joi.object({
  task: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required,
});

module.exports = {
  schemaTasks,
};
