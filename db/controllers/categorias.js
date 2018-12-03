var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Categorias.findAll({
		})
		.then(function(categorias){
			res.status(200).json(categorias);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Categorias.findById(req.params.id, {
		})
		.then(function(categorias){
			res.status(200).json(categorias);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newCategoria = models.Categorias.build();
		newCategoria.categoria = req.sanitize('categoria').escape();
		//newCategoria.estado = req.sanitize('estado').escape();
		
		console.log(newCategoria);
		newCategoria.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Categorias.findById(req.params.id)
		.then(function(categoriaToUpdate){
			console.log(categoriaToUpdate);
			categoriaToUpdate.categoria = req.sanitize('categoria').escape();
			categoriaToUpdate.estado = req.sanitize('estado').escape();
			
			
			categoriaToUpdate.save()
			.then(function(updatedCategoria){
				res.status(200).json(updatedCategoria);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Categorias.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedCategorias){
			res.status(200).json(deletedCategorias);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
