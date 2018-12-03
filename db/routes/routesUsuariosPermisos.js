'use strict';


module.exports = function(app) {
  var usuariosPermisosController = require('../controllers/usuariosPermisos');

  // todoList Routes
  app.route('/api/v1/usuariosPermisos')
    .get(usuariosPermisosController.fetchAll)
    .post(usuariosPermisosController.create);


  app.route('/api/v1/usuariosPermisos/:id')
    .get(usuariosPermisosController.fetchOne)
    .put(usuariosPermisosController.update)
    .delete(usuariosPermisosController.delete);
};

