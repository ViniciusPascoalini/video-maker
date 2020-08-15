const watsonCredentials = require('../credentials/watson-recognition.json')

const fs = require('fs')
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3')
const { IamAuthenticator } = require('ibm-watson/auth')

const visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    authenticator: new IamAuthenticator({
      apikey: watsonCredentials.apikey,
    }),
    url: watsonCredentials.url,
});

const classifyParams = {
    url: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/07/michael-jackson-obs.jpg',
}

  async function robot() {

    visualRecognition.classify(classifyParams)
  .then(response => {
    const classifiedImages = response.result;
    console.log(JSON.stringify(classifiedImages, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
}

  module.exports = robot