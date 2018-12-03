var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.detalleVentas.findAll()
		.then(function(compras){
			res.status(200).json(compras);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.detalleVentas.findById(req.params.id)
		.then(function(compras){
			res.status(200).json(compras);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newDetalleVenta = models.detalleVentas.build();
		newDetalleVenta.venta_id = req.sanitize('venta_id').escape();
		newDetalleVenta.cliente_id = req.sanitize('cliente_id').escape();
		newDetalleVenta.producto_id = req.sanitize('producto_id').escape();
		
		newDetalleVenta.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.detalleVentas.findById(req.params.id)
		.then(function(detalleVentasToUpdate){
			detalleVentasToUpdate.venta_id = req.sanitize('venta_id').escape();
			detalleVentasToUpdate.cliente_id = req.sanitize('cliente_id').escape();
			detalleVentasToUpdate.producto_id = req.sanitize('producto_id').escape();
			compraToUpdate.save()
			.then(function(_detalleVentasToUpdate){
				res.status(200).json(_detalleVentasToUpdate);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.detalleVentas.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedDetalleVentas){
			res.status(200).json(deletedDetalleVentas);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}


}
