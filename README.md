# AI_In_Finance

## Objective
* Build a stock price prediction web applilcation in python using Keras, Tensorflow, and [MERN](https://www.mongodb.com/blog/post/the-modern-application-stack-part-1-introducing-the-mean-stack) stack with Redux .

## Structure
* Frontend

  Frontend simple webpage is build with [React](https://reactjs.org/tutorial/tutorial.html#what-is-react)-[Redux](https://github.com/reduxjs/redux). The learning summary can be found [here](https://github.com/JYL123/AI_In_Finance/tree/master/toyapp).
  
* Server 

  Server is [Express](https://stackoverflow.com/a/12616205/9243701) web application framework with `node.js`. `Express` is used to route data from database to be displayed to react webpage.

* Database (via terminal)
  
  In this project, the database is [MongoDB](https://en.wikipedia.org/wiki/MongoDB), which is an open source, and leading [NoSQL DB](https://www.mongodb.com/nosql-inline). In this project, we statically save trained data (stock and its price) into the database, and user can retrieve the price from the interface with `get` url.   
  
* Machine learning/Python_data

  Machine learning part is to supply the stock price number needed in the frontend. The algorithm will be referenced from [this website](https://lilianweng.github.io/lil-log/2017/07/08/predict-stock-prices-using-RNN-part-1.html). In this reference post, the neura network used is [RNN](https://en.wikipedia.org/wiki/Recurrent_neural_network). This is because `RNN` is preferred for sequencial data, and stock prices are a series of time sequential data. 
  
  `Please note that the data is not trained in this project. However it can be done by following the above blog and modify according in python_data folder in this project.`
  
## Get started
1. `cd frontend`

2. `npm start` 

3. Enter `Date` and `Stock` to predict

4. Press `Predict Price`

## Access database

Please refer to [this page](https://github.com/JYL123/AI_In_Finance/tree/master/server) -> `With MongoDB (on terminal)`

## Install as a module 

```
npm install ai_in_finance@1.0.1
```

## Learning resources
* Financial side
  * http://karpathy.github.io/2015/05/21/rnn-effectiveness/
  * http://colah.github.io/posts/2015-08-Understanding-LSTMs/
  * https://lilianweng.github.io/lil-log/2017/07/08/predict-stock-prices-using-RNN-part-1.html
  
* Algorithmic trading
  * https://www.quantopian.com
  * https://numer.ai/homepage
  * https://academy.investopedia.com/products/become-a-day-trader?aca_ref=dfp-4490697266-138217071869
  
* Connection between react/dedux and python
  * https://www.bedjango.com/blog/how-to-build-web-app-react-redux-and-flask/
  * [Seems quite easy by following this](https://angularfirebase.com/lessons/tensorflow-js-quick-start/)
* How to build react-redux web app
  * [Learning summary](https://github.com/JYL123/AI_In_Finance/blob/master/toyapp/README.md)
  
