var mongoose = require('mongoose');
var MoviesSchema = require('../schemas/movie');
var Movie = mongoose.model('Movie', MoviesSchema);

module.exports = Movie;
