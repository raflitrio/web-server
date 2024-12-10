const tf = require('@tensorflow/tfjs');  // Import TensorFlow.js
require('dotenv').config();  // Import dotenv if you're using .env files

async function loadModel() {
    return tf.loadGraphModel(process.env.MODEL_URL); // Load the model using the URL in the environment variable
}

module.exports = loadModel;
