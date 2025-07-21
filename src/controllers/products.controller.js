import * as Service from '../services/products.service.js';

export const getProductsByName = async (req, res) => {
	try {
		const { producto } = req.query;
		if (!producto || producto.trim() === '') {
			return res.status(400).json({ message: 'El parámetro "producto" es requerido' });
		}

		const products = await Service.getProductsByName(producto);

		if (products.length > 0) {
			res.json(products);
		} else {
			res.status(404).json({
				message: 'No se encontraron productos'
			});
		}
	} catch (error) {
		res.status(500).json({
			message: 'Error del servidor',
			error: error.message
		});
	}
};

export const getProductsByPriceAsc = async (req, res) => {
	try {
		const products = await Service.getProductsByPriceAsc();

		if (products.length > 0) {
			res.json(products);
		} else {
			res.status(404).json({
				message: 'No se encontraron productos'
			});
		}
	} catch (error) {
		res.status(500).json({
			message: 'Error del servidor al obtener productos ordenados por precio',
			error: error.message
		});
	}
};

export const getAllProducts = async (req, res) => {
	const products = await Service.getAllProducts();
	res.json(products);
};

export const getProductById = async (req, res) => {
	const { id } = req.params;
	const product = await Service.getProductById(id);
	if (product) {
		res.json(product);
	} else {
		res.status(404).json({ message: 'Product not found' });
	}
};

export const createProduct = async (req, res) => {
	const newProduct = req.body;
	const createdProduct = await Service.createProduct(newProduct);
	res.status(201).json(createdProduct);
};

export const updateProduct = async (req, res) => {
	const { id } = req.params;
	const updatedProductData = req.body;

	const updatedProduct = await Service.updateProduct(id, updatedProductData);

	if (updatedProduct) {
		res.json(updatedProduct);
	} else {
		res.status(404).json({ message: 'Product not found' });
	}
};

export const deleteProduct = async (req, res) => {
	const { id } = req.params;
	const deletedProduct = await Service.deleteProduct(id);
	if (deletedProduct) {
		res.json({ message: 'Product deleted successfully' });
	} else {
		res.status(404).json({ message: 'Product not found' });
	}
};
