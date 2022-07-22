const formRoutes = require('./formRoutes.js');

module.exports = (app) => {
  app.use(
    formRoutes,
  );
};
