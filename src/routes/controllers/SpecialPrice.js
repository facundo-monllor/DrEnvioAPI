import { client } from '../../../index.js';

export const SpecialPrice = async (req, res) => {
  try {
    const { user_id, nombre_producto } = req.params;
    if (!user_id || !nombre_producto) {
      return res.status(400).send('Falta información.');
    }

    const database = client.db('challenge');
    const collectionUsers = database.collection('users');
    const collectionProducts = database.collection('products');

    const user = await collectionUsers.findOne({ id: Number(user_id) });
    if (user && user.hasOwnProperty('metadata')) {
      const priceDiscount = user.metadata.precios_especiales.find((p) => p.nombre_producto === nombre_producto);
      if (priceDiscount) {
        return res.status(200).send(`El precio con descuento de ${nombre_producto} es $${priceDiscount.precio_especial_personal}.`);
      } else {
        return res.status(400).send('Producto no encontrado.');
      }
    } else if (user) {
      const priceProduct = await collectionProducts.findOne({ nombre: nombre_producto,});
      if (priceProduct) {
        return res.status(200).send(`El precio normal de ${nombre_producto} es $${priceProduct.precio_base}.`);
      } else {
        return res.status(400).send('Producto no encontrado.');
      }
    } else {
      return res.status(400).send('Usuario no encontrado.');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
