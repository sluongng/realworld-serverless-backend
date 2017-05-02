/**
 * Created by NB on 5/2/2017.
 */

import uuid from 'uuid';
import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

//post  /users/login
export function login(event, context, callback) {};

//post  /users
export function createUser(event, context, callback) {

  const data = JSON.parse(event.body);

  // const params = {
  //   TableName: 'realworld-users',
  //
  //   Item: {
  //     username: data.user.username,
  //     email: data.user.email,
  //     bio: ,
  //     image: ,
  //     favorites: ,
  //     following: ,
  //     hash: ,
  //     salt: ,
  //   },
  // }

};

//get   /user
export function getUser(event, context, callback) {
  const params = {
    TableName: 'realworld-users',

    Key:{
      userId: event.requestContext.authorizer.claims.sub,

    },
  }
};

//put   /user
export function updateUser(event, context, callback) {};