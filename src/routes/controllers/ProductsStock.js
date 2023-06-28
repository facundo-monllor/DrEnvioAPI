import { client } from '../../../index.js';

export const ProductsStock = async (req, res) => {
  try {
    const database = client.db('challenge');
    const collectionProducts = database.collection('products');

    const products = await collectionProducts.find({ existencia: { $gt: 0 } }).toArray();

    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
