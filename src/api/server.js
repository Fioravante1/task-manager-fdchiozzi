const app = require('./app');

const PORT = process.env.PORT || 3001;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
