import server from './src/app.js';
import { set } from 'mongoose';
import { PORT, DB_USER, DB_PASSWORD } from './config.js';
import { MongoClient } from 'mongodb';

set('strictQuery', true);

const url = `mongodb://${DB_USER}:${DB_PASSWORD}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;

export const client = new MongoClient(url);

export async function connectDB() {
  try {
    await client.connect();
    console.log('Conexión a la base de datos exitosa');

    server.listen(PORT, () => {
      console.log(`Listening at ${PORT}`);
    });
  } catch (err) {
    console.error('Error de conexión a la base de datos', err);
  }
}
