/**
 * Created by NB on 5/2/2017.
 */

import uuid from 'uuid';
import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import secret from '../config';

/*
 * METHOD: POST
 *
 * PATH:   /users/login
 */
export function login(event, context, callback) {
  //TODO: Implement login()
};

/*
* METHOD: POST
*
* PATH:   /users
*/

function generateToken( userId, username ) {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: userId,
    username: username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
}

export async function createUser(event, context, callback) {

  const data = JSON.parse(event.body);

  const userId = uuid.v4();
  const username = data.user.username;
  const email = data.user.email;

  //Handling password encryption
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(data.user.password, salt, 10000, 512, 'sha512').toString('hex');

  const params = {
    TableName: 'realworld-users',

    ConditionExpression: "attribute_not_exist(username) AND attribute_not_exist(email)",

    Item: {
      userId: userId,
      username: username,
      email: email,
      bio: '',
      image: '',
      favorites: [],
      following: [],
      hash: hash,
      salt: salt,
    },
  };

  try {
    const result = await dynamoDbLib.call('put', params);
    callback(
      null,
      success({
        username: username,
        email: email,
        token: generateToken(userId, username)
      })
    );
  }
  catch(e) {
    callback(
      null,
      failure(e)
    );
  }
};

/*
 * METHOD: GET
 *
 * PATH:   /user
 */
export function getUser(event, context, callback) {
  //TODO Implement getUser()
  const params = {
    TableName: 'realworld-users',

    Key:{
      userId: event.requestContext.authorizer.claims.sub,

    },
  }
};


/*
 * METHOD: PUT
 *
 * PATH:   /user
 */
export function updateUser(event, context, callback) {
  //TODO Implement updateUser()
};