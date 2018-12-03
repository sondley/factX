'use strict';


module.exports = function(app) {
  var empresasController = require('../controllers/empresas');

  // todoList Routes
  app.route('/api/v1/empresas')
    .get(empresasController.fetchAll)
    .post(empresasController.create);


  app.route('/api/v1/empresas/:id')
    .get(empresasController.fetchOne)
    .put(empresasController.update)
    .delete(empresasController.delete);
};

