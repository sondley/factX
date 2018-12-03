'use strict';


module.exports = function(app) {
  var clientesController = require('../controllers/clientes');

  // todoList Routes
  app.route('/api/v1/clientes')
    .get(clientesController.fetchAll)
    .post(clientesController.create);


  app.route('/api/v1/clientes/:id')
    .get(clientesController.fetchOne)
    .put(clientesController.update)
    .delete(clientesController.delete);
};

