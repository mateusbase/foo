javascript
module.exports.edge = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda Edge!' }),
  };
  return response;
};