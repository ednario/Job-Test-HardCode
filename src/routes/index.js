const formRoutes = require('./formRoutes');

module.exports = (app) => {
  app.use(
    formRoutes,
  );
};
