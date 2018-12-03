var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Permisos.findAll({
		})
		.then(function(categorias){
			res.status(200).json(categorias);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Permisos.findById(req.params.id, {
		})
		.then(function(categorias){
			res.status(200).json(categorias);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newPermiso = models.Permisos.build();
		newPermiso.nombre = req.sanitize('nombre').escape();
		//newCategoria.estado = req.sanitize('estado').escape();
		
		console.log(newPermiso);
		newPermiso.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Permisos.findById(req.params.id)
		.then(function(permisoToUpdate){
			console.log(permisoToUpdate);
			permisoToUpdate.nombre = req.sanitize('nombre').escape();
			permisoToUpdate.estado = req.sanitize('estado').escape();
			
			
			permisoToUpdate.save()
			.then(function(updatedPermiso){
				res.status(200).json(updatedPermiso);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Permisos.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedPermisos){
			res.status(200).json(deletedPermisos);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
