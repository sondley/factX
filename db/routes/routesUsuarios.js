'use strict';


module.exports = function(app) {
  var usuariosController = require('../controllers/usuarios');

  // todoList Routes
  app.route('/api/v1/usuarios')
    .get(usuariosController.fetchAll)
    .post(usuariosController.create);


  app.route('/api/v1/usuarios/:id')
    .get(usuariosController.fetchOne)
    .put(usuariosController.update)
    .delete(usuariosController.delete);
};

