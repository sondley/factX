var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Clientes.findAll({
		})
		.then(function(clientes){
			res.status(200).json(clientes);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Clientes.findById(req.params.id, {
		})
		.then(function(clientes){
			res.status(200).json(clientes);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newCliente = models.Clientes.build();
		//newCategoria.categoria = req.sanitize('categoria').escape();
		newCliente.nombres = req.sanitize('nombres').escape();
		newCliente.appelidos = req.sanitize('appelidos').escape();
		newCliente.cedula = req.sanitize('cedula').escape();
		newCliente.telefono = req.sanitize('telefono').escape();
		newCliente.direccion = req.sanitize('direccion').escape();
		newCliente.correo = req.sanitize('correo').escape();
		//newCategoria.estado = req.sanitize('estado').escape();
		
		console.log(newCliente);
		newCliente.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Clientes.findById(req.params.id)
		.then(function(clienteToUpdate){
			console.log(clienteToUpdate);
			clienteToUpdate.nombres = req.sanitize('nombres').escape();
			clienteToUpdate.appelidos = req.sanitize('appelidos').escape();
			clienteToUpdate.cedula = req.sanitize('cedula').escape();
			clienteToUpdate.telefono = req.sanitize('telefono').escape();
			clienteToUpdate.direccion = req.sanitize('direccion').escape();
			clienteToUpdate.correo = req.sanitize('correo').escape();
			clienteToUpdate.estado = req.sanitize('estado').escape();
			clienteToUpdate.save()
			.then(function(updatedCliente){
				res.status(200).json(updatedCliente);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Clientes.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedClientes){
			res.status(200).json(deletedClientes);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
