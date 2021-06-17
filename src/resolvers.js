const { Books } = require("./constants");

module.exports = {
  Query: {
    hello() {
      return "Hello world from the Other Side!";
    },

    books() {
      return Books;
    },

    book(args) {
      const { name } = args;
      if (!name || name === "") return null;
      const foundBook = Books.find((books) => books.name === name);
      if (!foundBook) return null;
      return foundBook;
    },
  },
};
