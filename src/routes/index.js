import { Router } from 'express';
import products from './subRoutes/products.routes.js';
import price from './subRoutes/price.routes.js';

const router = Router();

router.use('/products', products);
router.use('/price', price);

export default router;
