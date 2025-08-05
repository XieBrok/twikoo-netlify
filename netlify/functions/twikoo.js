exports.handler = require('twikoo-netlify').handler
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://hhyyyy.cn',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: JSON.stringify({ message: 'Twikoo 云函数运行正常' })
  };
};

