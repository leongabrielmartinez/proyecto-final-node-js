import { Router } from 'express';
import { auth } from '../middlewares/auth.middleware.js';

import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProductById,
	getProductsByName,
	getProductsByPriceAsc,
	updateProduct
} from '../controllers/products.controller.js';

const router = Router();

router.get('/products/sorted-price-asc', getProductsByPriceAsc);
router.get('/products', getAllProducts);
router.get('/products/search', getProductsByName);
router.get('/products/:id', getProductById);
router.post('/products', auth, createProduct);
router.put('/products/:id', auth, updateProduct);
router.delete('/products/:id', auth, deleteProduct);

export default router;
