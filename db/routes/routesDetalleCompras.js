'use strict';


module.exports = function(app) {
  var detalleComprasController = require('../controllers/detalleCompras');

  // todoList Routes
  app.route('/api/v1/detalleCompras')
    .get(detalleComprasController.fetchAll)
    .post(detalleComprasController.create);


  app.route('/api/v1/detalleCompras/:id')
    .get(detalleComprasController.fetchOne)
    .put(detalleComprasController.update)
    .delete(detalleComprasController.delete);
};

