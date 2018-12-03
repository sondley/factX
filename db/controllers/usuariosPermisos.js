var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.usuariosPermisos.findAll()
		.then(function(_usuariosPermisos){
			res.status(200).json(_usuariosPermisos);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.usuariosPermisos.findById(req.params.id)
		.then(function(_usuariosPermisos){
			res.status(200).json(_usuariosPermisos);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newUsuariosPermisos = models.usuariosPermisos.build();
		newUsuariosPermisos.usuario_id = req.sanitize('usuario_id').escape();
		newUsuariosPermisos.permiso_id = req.sanitize('permiso_id').escape();
		
		
		newUsuariosPermisos.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.usuariosPermisos.findById(req.params.id)
		.then(function(usuariosPermisosToUpdate){
			usuariosPermisosToUpdate.usuario_id = req.sanitize('usuario_id').escape();
			usuariosPermisosToUpdate.permiso_id = req.sanitize('permiso_id').escape();
			
			usuariosPermisosToUpdate.save()
			.then(function(_usuariosPermisosToUpdate){
				res.status(200).json(_usuariosPermisosToUpdate);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.usuariosPermisos.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedUsuariosPermisos){
			res.status(200).json(deletedUsuariosPermisos);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}


}
