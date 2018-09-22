const knexfile = require('./knexfile.js');
const knex = require('knex')(knexfile);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin(['bookshelf-camelcase', "bookshelf-manager"]);

module.exports = bookshelf;
