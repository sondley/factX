'use strict';


module.exports = function(app) {
  var permisosController = require('../controllers/permisos');

  // todoList Routes
  app.route('/api/v1/permisos')
    .get(permisosController.fetchAll)
    .post(permisosController.create);


  app.route('/api/v1/permisos/:id')
    .get(permisosController.fetchOne)
    .put(permisosController.update)
    .delete(permisosController.delete);
};

