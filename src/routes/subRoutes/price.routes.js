import { Router } from 'express';
import { SpecialPrice } from '../controllers/SpecialPrice.js';

const productsRouter = Router();

productsRouter.get('/:user_id/:nombre_producto', SpecialPrice);
productsRouter.get('/:user_id', SpecialPrice);

export default productsRouter;
