## Objective

Learn to build an [RNN](http://colah.github.io/posts/2015-08-Understanding-LSTMs/) model with [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) cells to predict stock price of [MS](https://finance.yahoo.com/quote/MS/), in which the data can be downloaded from `Yahoo Finance`. (Refer to [this page](https://github.com/JYL123/AI_In_Finance/blob/master/python_data/yahoo_data.py) for more information about how to download the data in `Pandas`, and [this page](https://github.com/JYL123/AI_In_Finance/blob/master/python_data/stock_ms.csv) for downloaded data in `csv` format)



## RNN and LSTM

`RNN` is used to train data when previous information should be considered to predict the current value. This is due to its repetitve neural network where the each neural network calculate an output and feed this output to the input of the next neural network. These repetitive neural networks are called `self-loop`. Therefore, [`RNN` is good for sequential data](http://karpathy.github.io/2015/05/21/rnn-effectiveness/), however, `RNN` is less effective when the previous information it has to refer to to predict the current data is far away. `LSTM` is designed to alleviate this problem to help `RMN` to better memorize the long-term contex.

## Learning resources

1. [Predict Stock Prices Using RNN: Part 1](https://lilianweng.github.io/lil-log/2017/07/08/predict-stock-prices-using-RNN-part-1.html)

2. [Predict Stock Prices Using RNN: Part 2](https://lilianweng.github.io/lil-log/2017/07/22/predict-stock-prices-using-RNN-part-2.html)



