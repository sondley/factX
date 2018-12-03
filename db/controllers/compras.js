var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Compras.findAll()
		.then(function(compras){
			res.status(200).json(compras);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Compras.findById(req.params.id)
		.then(function(compras){
			res.status(200).json(compras);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newCompra = models.Compras.build();
		newCompra.numero_compra = req.sanitize('numero_compra').escape();
		newCompra.comprador = req.sanitize('comprador').escape();
		newCompra.moneda = req.sanitize('moneda').escape();
		newCompra.subtotal = req.sanitize('subtotal').escape();
		newCompra.total_iva = req.sanitize('total_iva').escape();
		newCompra.total = req.sanitize('total').escape();
		newCompra.tipo_pago = req.sanitize('tipo_pago').escape();
		newCompra.descuento = req.sanitize('descuento').escape();
		newCompra.importe = req.sanitize('importe').escape();
		newCompra.proveedor_id = req.sanitize('proveedor_id').escape();
		newCompra.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Compras.findById(req.params.id)
		.then(function(compraToUpdate){
			compraToUpdate.numero_compra = req.sanitize('numero_compra').escape();
			compraToUpdate.comprador = req.sanitize('comprador').escape();
			compraToUpdate.moneda = req.sanitize('moneda').escape();
			compraToUpdate.subtotal = req.sanitize('subtotal').escape();
			compraToUpdate.total_iva = req.sanitize('total_iva').escape();
			compraToUpdate.total = req.sanitize('total').escape();
			compraToUpdate.tipo_pago = req.sanitize('tipo_pago').escape();
			compraToUpdate.descuento = req.sanitize('descuento').escape();
			compraToUpdate.importe = req.sanitize('importe').escape();
			compraToUpdate.proveedor_id = req.sanitize('proveedor_id').escape();
			compraToUpdate.save()
			.then(function(compraToUpdate){
				res.status(200).json(compraToUpdate);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Compras.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedCompras){
			res.status(200).json(deletedArtworks);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}


}
