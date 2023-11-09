const APIGatewayRequest = ({
  body,
  method,
  path,
  queryStringObject,
  pathParametersObject,
  }) => {
  const request = {
      body,
      headers: {},
      httpMethod: method,
      path,
      pathParameters: pathParametersObject || null,
      queryStringParameters: queryStringObject || null,
  };
  return request;
};

module.exports = APIGatewayRequest;
