var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Ventas.findAll()
		.then(function(ventas){
			res.status(200).json(ventas);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Ventas.findById(req.params.id)
		.then(function(ventas){
			res.status(200).json(ventas);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newVenta = models.Ventas.build();
		newVenta.numero_venta = req.sanitize('numero_venta').escape();
		newVenta.vendedor = req.sanitize('vendedor').escape();
		newVenta.moneda = req.sanitize('moneda').escape();
		newVenta.subtotal = req.sanitize('subtotal').escape();
		newVenta.total_iva = req.sanitize('total_iva').escape();
		newVenta.total = req.sanitize('total').escape();
		newVenta.tipo_pago = req.sanitize('tipo_pago').escape();
		newVenta.descuento = req.sanitize('descuento').escape();
		newVenta.importe = req.sanitize('importe').escape();
		newVenta.cliente_id = req.sanitize('cliente_id').escape();
		newVenta.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Ventas.findById(req.params.id)
		.then(function(ventaToUpdate){
			ventaToUpdate.numero_venta = req.sanitize('numero_venta').escape();
			ventaToUpdate.vendedor = req.sanitize('vendedor').escape();
			ventaToUpdate.moneda = req.sanitize('moneda').escape();
			ventaToUpdate.subtotal = req.sanitize('subtotal').escape();
			ventaToUpdate.total_iva = req.sanitize('total_iva').escape();
			ventaToUpdate.total = req.sanitize('total').escape();
			ventaToUpdate.tipo_pago = req.sanitize('tipo_pago').escape();
			ventaToUpdate.descuento = req.sanitize('descuento').escape();
			ventaToUpdate.importe = req.sanitize('importe').escape();
			ventaToUpdate.cliente_id = req.sanitize('cliente_id').escape();
			ventaToUpdate.save()
			.then(function(ventaToUpdate){
				res.status(200).json(ventaToUpdate);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Ventas.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedVentas){
			res.status(200).json(deletedVentas);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}


}
