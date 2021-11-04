const validate = require('../helpers/validateTasks');
const Error = require('../helpers/errors');

const tasksValidate = (req, res, next) => {
  const { error } = validate.schemaTasks.validate(req.body);
  const { code, message } = Error.badRequest('Entradas inválidas. Tente novamente');
  if (error) {
    return res.status(code).json({ message });
  }
  return next();
};

module.exports = tasksValidate;
