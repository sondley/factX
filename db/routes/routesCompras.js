'use strict';


module.exports = function(app) {
  var comprasController = require('../controllers/compras');

  // todoList Routes
  app.route('/api/v1/compras')
    .get(comprasController.fetchAll)
    .post(comprasController.create);


  app.route('/api/v1/compras/:id')
    .get(comprasController.fetchOne)
    .put(comprasController.update)
    .delete(comprasController.delete);
};

