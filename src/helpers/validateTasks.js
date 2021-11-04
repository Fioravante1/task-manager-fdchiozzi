const Joi = require('@hapi/joi');

const schemaTasks = Joi.object({
  tasks: Joi.string().required(),
  description: Joi.string().required(),
  taskStatus: Joi.string().required(),
});

module.exports = {
  schemaTasks,
};
