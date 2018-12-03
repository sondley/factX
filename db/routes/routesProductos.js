'use strict';


module.exports = function(app) {
  var productosController = require('../controllers/productos');

  // todoList Routes
  app.route('/api/v1/productos')
    .get(productosController.fetchAll)
    .post(productosController.create);


  app.route('/api/v1/productos/:id')
    .get(productosController.fetchOne)
    .put(productosController.update)
    .delete(productosController.delete);

  app.route('/api/v1/prod/codigoBarra/:codigo_b')
     .get(productosController.fetchProductoBarCode);

};

