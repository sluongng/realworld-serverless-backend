/**
 * Created by NB on 5/2/2017.
 */

import uuid from 'uuid';
import dynamoose from 'dynamoose';
import jwt from 'jsonwebtoken';
import { secret } from '../config';

var UserSchema = new dynamoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    // match: [ /^[a-zA-Z0-9]+$/, "is invalid"],
    validate: function(username) { /^[a-zA-Z0-9]+$/.test(username) },
    index: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    // match: [ /\S+@\S+\.\S+/, "is invalid"],
    validate: function(username) { /\S+@\S+\.\S+/.test(username) },
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
}, { timestamps: true });

export function generateJWT() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate()+60);

  return jwt.sign({
    //dsfasdfasdf
  }, secret)
}