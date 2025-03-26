const express = require('express');

const booksController = require('./books-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/books', route);

  route.get('/', (request, response) => {
    let {offset,limit} = req.query;
  
    offset = parseInt(offset) || 0;
    limit = parseInt(limit) || 10;
    });

  // Get list of books
  route.get('/', booksController.getBooks);

  // Create a new book
  route.post('/', booksController.createBook);

  // TODO: Get a book by id

  // TODO: Update a book by id

  // TODO: Delete a book by id
};
