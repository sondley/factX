var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Usuarios.findAll({
		})
		.then(function(usuarios){
			res.status(200).json(usuarios);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Usuarios.findById(req.params.id, {
		})
		.then(function(usuarios){
			res.status(200).json(usuarios);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newUsuario= models.Usuarios.build();
		//newCategoria.categoria = req.sanitize('categoria').escape();
		newUsuario.nombres = req.sanitize('nombres').escape();
		newUsuario.cedula = req.sanitize('cedula').escape();
		newUsuario.telefono = req.sanitize('telefono').escape();
		newUsuario.direccion = req.sanitize('direccion').escape();
		newUsuario.correo = req.sanitize('correo').escape();

		newUsuario.appelidos = req.sanitize('appelidos').escape();
		newUsuario.cargo = req.sanitize('cargo').escape();
		newUsuario.usuario = req.sanitize('usuario').escape();
		newUsuario.password = req.sanitize('password').escape();
		//newEmpresa.correo = req.sanitize('correo').escape();
		//newCategoria.estado = req.sanitize('estado').escape();
		
		console.log(newUsuario);
		newUsuario.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Usuarios.findById(req.params.id)
		.then(function(usuarioToUpdate){
			console.log(usuarioToUpdate);
			usuarioToUpdate.nombres = req.sanitize('nombres').escape();
			usuarioToUpdate.cedula = req.sanitize('cedula').escape();
			usuarioToUpdate.telefono = req.sanitize('telefono').escape();
			usuarioToUpdate.direccion = req.sanitize('direccion').escape();
			usuarioToUpdate.correo = req.sanitize('correo').escape();

			usuarioToUpdate.appelidos = req.sanitize('appelidos').escape();
			usuarioToUpdate.cargo = req.sanitize('cargo').escape();
			usuarioToUpdate.usuario = req.sanitize('usuario').escape();
			usuarioToUpdate.password = req.sanitize('password').escape();
			usuarioToUpdate.estado = req.sanitize('estado').escape();
			usuarioToUpdate.save()
			.then(function(updatedUsuario){
				res.status(200).json(updatedUsuario);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Usuarios.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedUsuarios){
			res.status(200).json(deletedUsuarios);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
