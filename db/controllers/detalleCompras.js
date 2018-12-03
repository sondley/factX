var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.detalleCompras.findAll()
		.then(function(_detalleCompras){
			res.status(200).json(_detalleCompras);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.detalleCompras.findById(req.params.id)
		.then(function(_detalleCompras){
			res.status(200).json(_detalleCompras);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newDetalleCompra = models.detalleCompras.build();
		newDetalleCompra.compra_id = req.sanitize('compra_id').escape();
		newDetalleCompra.proveedor_id = req.sanitize('proveedor_id').escape();
		newDetalleCompra.producto_id = req.sanitize('producto_id').escape();
		
		newDetalleCompra.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.detalleCompras.findById(req.params.id)
		.then(function(detalleComprasToUpdate){
			detalleComprasToUpdate.compra_id = req.sanitize('compra_id').escape();
			detalleComprasToUpdate.proveedor_id = req.sanitize('proveedor_id').escape();
			detalleComprasToUpdate.producto_id = req.sanitize('producto_id').escape();
			compraToUpdate.save()
			.then(function(_detalleComprasToUpdate){
				res.status(200).json(_detalleComprasToUpdate);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.detalleCompras.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedDetalleCompras){
			res.status(200).json(deletedDetalleCompras);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}


}
