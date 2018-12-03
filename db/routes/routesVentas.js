'use strict';


module.exports = function(app) {
  var ventasController = require('../controllers/ventas');

  // todoList Routes
  app.route('/api/v1/ventas')
    .get(ventasController.fetchAll)
    .post(ventasController.create);


  app.route('/api/v1/ventas/:id')
    .get(ventasController.fetchOne)
    .put(ventasController.update)
    .delete(ventasController.delete);
};

