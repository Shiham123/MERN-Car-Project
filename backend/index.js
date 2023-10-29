const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
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

    app.post('/jwt', async (request, response) => {
      const user = request.body;
      console.log(user);

      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1hr',
      });
      response
        .cookie('token', token, {
          httpOnly: true,
          secure: false,
          sameSite: 'none',
        })
        .send({ success: true });
    });

    app.get('/services', async (request, response) => {
      const cursor = carsCollection.find();
      const result = await cursor.toArray();
      response.send(result);
    });

    app.get('/services/:id', async (request, response) => {
      const id = request.params.id;
      console.log(request.body);
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: { title: 1, price: 1, id: 1, img: 1 },
      };

      const result = await carsCollection.findOne(query, options);
      response.send(result);
    });

    // second database
    app.get('/checkOut', async (request, response) => {
      let query = {};
      if (request.query?.customerEmail) {
        query = { customerEmail: request.query.customerEmail };
      }
      const cursor = serviceCollection.find(query);
      const result = await cursor.toArray();
      response.send(result);
    });

    app.post('/checkOut', async (request, response) => {
      const booking = request.body;
      const result = await serviceCollection.insertOne(booking);
      response.send(result);
    });

    app.patch('/checkOut/:id', async (request, response) => {
      const id = request.params.id;
      const query = { _id: new ObjectId(id) };

      const updatedDoc = {
        $set: {
          status: request.body.status,
        },
      };
      const result = await serviceCollection.updateOne(query, updatedDoc);
      response.send(result);
    });

    app.delete('/checkOut/:id', async (request, response) => {
      const id = request.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
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
