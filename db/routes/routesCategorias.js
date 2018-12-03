'use strict';


module.exports = function(app) {
  var categoriasController = require('../controllers/categorias');

  // todoList Routes
  app.route('/api/v1/categorias')
    .get(categoriasController.fetchAll)
    .post(categoriasController.create);


  app.route('/api/v1/categorias/:id')
    .get(categoriasController.fetchOne)
    .put(categoriasController.update)
    .delete(categoriasController.delete);
};

