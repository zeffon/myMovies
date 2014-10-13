/**
 * Created by yuzefeng on 14-10-13.
 */
var mongoose = require('mongoose');
var MoviesSchema = require('../schemas/user');
var User = mongoose.model('User', MoviesSchema);

module.exports = User;
