import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Route for Save new book
app.post('/book', (req, res) => {
  try {
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      rel_yr: req.body.rel_yr,
    };
    const book = new Book(newBook);
  } catch (err) {
    console.log(err);
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
