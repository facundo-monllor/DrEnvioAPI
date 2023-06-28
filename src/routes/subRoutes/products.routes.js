import { Router } from 'express';
import { ProductsStock } from '../controllers/ProductsStock.js';

const productsRouter = Router();

productsRouter.get('/', ProductsStock);

export default productsRouter;
