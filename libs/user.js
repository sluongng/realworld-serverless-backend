/**
 * Created by NB on 5/2/2017.
 */

var dynamoose = require('dynamoose');

var UserSchema = new dynamoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [ /^[a-zA-Z0-9]+$/, "is invalid"],
    index: true
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [ /\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  bio: String,
  image: String,
  favorites: [{
    type: dynamoose.Schema.Types.ObjectId,
    ref: 'Article'
  }],
  following: [{
    type: dynamoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  hash: String,
  salt: String
},{timeStamp: true});

