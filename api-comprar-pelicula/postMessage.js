const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
 
exports.write = async (event) => {
  const { body } = event;
  console.log("recive data:",body);
  try {
    const { author, text } = JSON.parse(body);
    if (!author || !text) {
      return {
        statusCode: 403,
        body: 'author and text are required!'
      }
    }
    let random = Math.floor(Math.random() * Math.floor(100));
    await dynamodb.putItem({
      TableName: 'api-comprar-pelicula-api-comprar-pelicula',
      Item: {
        msgId: { S: 'board' },
        author: { S: author },
        partKey: { S: 'element'+random },
        createdAt: { N: String(Date.now()) } // still expects string!
      }
    }).promise();
    return {
       statusCode: 200,
       body: 'Message posted on board!',
    }
  } catch (err) {
        console.log("exception ocurrido",err)
    return {
       statusCode: 500,
       body: 'Something went wrong :(',
    }
  }
};