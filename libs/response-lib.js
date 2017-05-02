/**
 * Created by NB on 5/2/2017.
 */

export function success(body) {
  return buildResponse(200, body);
}

export function failure(body) {
  return buildResponse(500, body);
}

export function validationError(err) {
  return buildResponse(
    422,
    {errors: err}
  );

}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      'Accress-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  };
}