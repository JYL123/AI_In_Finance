//Reference: https://github.com/tensorflow/tfjs
import * as tf from '@tensorflow/tfjs'

//define model for linear regression. 
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape:[1]}));

//prepare the model for training: specify the loss and the optimizer 
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

//generate some synthetic data for training
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

//train model using data
model.fit(xs, ys).then(() => {
    model.predict(tf.tensor2d([5], [1, 1])).print()
})