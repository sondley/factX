var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Empresas.findAll({
		})
		.then(function(empresas){
			res.status(200).json(empresas);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Empresas.findById(req.params.id, {
		})
		.then(function(empresas){
			res.status(200).json(empresas);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newEmpresa = models.Empresas.build();
		//newCategoria.categoria = req.sanitize('categoria').escape();
		newEmpresa.nombres = req.sanitize('nombres').escape();
		newEmpresa.cedula = req.sanitize('cedula').escape();
		newEmpresa.telefono = req.sanitize('telefono').escape();
		newEmpresa.direccion = req.sanitize('direccion').escape();
		newEmpresa.correo = req.sanitize('correo').escape();
		//newCategoria.estado = req.sanitize('estado').escape();
		
		console.log(newEmpresa);
		newEmpresa.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Empresas.findById(req.params.id)
		.then(function(empresaToUpdate){
			console.log(empresaToUpdate);
			empresaToUpdate.nombres = req.sanitize('nombres').escape();
			empresaToUpdate.cedula = req.sanitize('cedula').escape();
			empresaToUpdate.telefono = req.sanitize('telefono').escape();
			empresaToUpdate.direccion = req.sanitize('direccion').escape();
			empresaToUpdate.correo = req.sanitize('correo').escape();
			empresaToUpdate.estado = req.sanitize('estado').escape();
			empresaToUpdate.save()
			.then(function(updatedEmpresa){
				res.status(200).json(updatedEmpresa);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Empresas.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedEmpresas){
			res.status(200).json(deletedEmpresas);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
