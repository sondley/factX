'use strict';


module.exports = function(app) {
  var detalleVentasController = require('../controllers/detalleVentas');

  // todoList Routes
  app.route('/api/v1/detalleVentas')
    .get(detalleVentasController.fetchAll)
    .post(detalleVentasController.create);


  app.route('/api/v1/detalleVentas/:id')
    .get(detalleVentasController.fetchOne)
    .put(detalleVentasController.update)
    .delete(detalleVentasController.delete);
};

