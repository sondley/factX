var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Productos.findAll({
		})
		.then(function(productos){
			res.status(200).json(productos);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	fetchOne(req, res){
		models.Productos.findById(req.params.id, {
		})
		.then(function(productos){
			res.status(200).json(productos);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},
	fetchProductoBarCode(req, res){
		models.Productos.findOne({
			where:{
				codigo_b:req.params.codigo_b
			}
		})
		.then(function(productos){
			res.status(200).json(productos);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},

	create(req, res){
		var newProducto = models.Productos.build();
		newProducto.producto = req.sanitize('producto').escape();
		newProducto.presentacion = req.sanitize('presentacion').escape();
		newProducto.unidad = req.sanitize('unidad').escape();
		newProducto.moneda = req.sanitize('moneda').escape();
		newProducto.stock = req.sanitize('stock').escape();
		newProducto.precio_compra = req.sanitize('precio_compra').escape();
		newProducto.precio_venta = req.sanitize('precio_venta').escape();
		newProducto.imagen = req.sanitize('imagen').escape();
		newProducto.codigo_b = req.sanitize('codigo_b').escape();
		//newProducto.estado = req.sanitize('estado').escape();
		
		console.log(newProducto);
		newProducto.save()
		.then(function(instance){
			res.status(200).json(instance);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Productos.findById(req.params.id)
		.then(function(productoToUpdate){
			console.log(productoToUpdate);
			productoToUpdate.producto = req.sanitize('producto').escape();
			productoToUpdate.presentacion = req.sanitize('presentacion').escape();
			productoToUpdate.unidad = req.sanitize('unidad').escape();
			productoToUpdate.moneda = req.sanitize('moneda').escape();
			productoToUpdate.stock = req.sanitize('stock').escape();
			productoToUpdate.precio_compra = req.sanitize('precio_compra').escape();
			productoToUpdate.precio_venta = req.sanitize('precio_venta').escape();
			productoToUpdate.imagen = req.sanitize('imagen').escape();
			productoToUpdate.codigo_b = req.sanitize('codigo_b').escape();
			productoToUpdate.estado = req.sanitize('estado').escape();
			
			
			productoToUpdate.save()
			.then(function(updatedProducto){
				res.status(200).json(updatedProducto);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Productos.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedProductos){
			res.status(200).json(deletedProductos);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}
