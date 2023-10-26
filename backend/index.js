const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send('app is running');
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster-one.varjcyv.mongodb.net/?retryWrites=true&w=majority`;

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

    console.log('You successfully connected to MongoDB!');
  } catch (error) {
    console.log(error);
  }
}
run();

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
