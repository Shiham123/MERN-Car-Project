const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send('app is running');
});

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster-one.varjcyv.mongodb.net/?retryWrites=true&w=majority`;
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    // await client.db('admin').command({ ping: 1 });

    const carsDatabase = client.db('carsDB');
    const carsCollection = carsDatabase.collection('cars');

    const serviceDatabase = client.db('carsDB');
    const serviceCollection = serviceDatabase.collection('service');

    app.get('/services', async (request, response) => {
      const cursor = carsCollection.find();
      const result = await cursor.toArray();
      response.send(result);
    });

    app.get('/services/:id', async (request, response) => {
      const id = request.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: { title: 1, price: 1, id: 1 },
      };
      const result = await carsCollection.findOne(query, options);
      response.send(result);
    });

    // second database

    app.get('/checkOut', async (request, response) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      response.send(result);
    });

    app.post('/checkOut', async (request, response) => {
      const booking = request.body;
      const result = await serviceCollection.insertOne(booking);
      response.send(result);
    });

    console.log('You successfully connected to MongoDB!');
  } catch (error) {
    console.log(error);
  }
}
run();

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
