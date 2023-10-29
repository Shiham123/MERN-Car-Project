const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use(cookieParser());

// default check
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

const logger = async (request, response, next) => {
  console.log('host name', request.host, 'url', request.originalUrl);
  next();
};

const verifyToken = async (request, response, next) => {
  const token = request.cookies.token;
  console.log('verify token --- ', token);
  if (!token) {
    return response.status(401).send({ message: 'not authorized' });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      // console.log(error);
      return response.status(402).send({ message: 'not valid token' });
    }
    console.log('value in the decoded --- ', decoded);
    request.user = decoded;
    next();
  });
};

async function run() {
  try {
    // await client.connect();
    // await client.db('admin').command({ ping: 1 });

    const carsDatabase = client.db('carsDB');
    const carsCollection = carsDatabase.collection('cars');

    // second database
    const serviceDatabase = client.db('carsDB');
    const serviceCollection = serviceDatabase.collection('service');

    // json web token
    app.post('/jwt', logger, async (request, response) => {
      const user = request.body;
      // console.log(user);

      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '10h',
      });

      response
        .cookie('token', token, { httpOnly: true, secure: false })
        .send({ success: true });
    });

    // first database
    app.get('/services', logger, async (request, response) => {
      const cursor = carsCollection.find();
      const result = await cursor.toArray();
      response.send(result);
    });

    app.get('/services/:id', async (request, response) => {
      const id = request.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: { title: 1, price: 1, id: 1, img: 1 },
      };

      const result = await carsCollection.findOne(query, options);
      response.send(result);
    });

    // second database
    app.get('/checkOut', logger, verifyToken, async (request, response) => {
      // console.log('token one', request.cookies);
      // console.log('user token', request.user);
      // console.log('user mail ---', request.query.customerEmail);

      if (request.query.customerEmail !== request.user.email) {
        return response.status(403).send({ message: 'forbidden' });
      }

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

    // ensure connection
    console.log('You successfully connected to MongoDB!');
  } catch (error) {
    console.log(error);
  }
}
run();

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
