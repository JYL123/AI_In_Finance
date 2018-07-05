## Structure
* Financial basic to set up workspace
* Introduction to common financial analyses
* Development of a simple momentum strategy
* Backtest with Pandas, zipline, andQuantopian
* Optimization to your strategy and evaluate the strategy's performance and robustness 

## Basics
* Stocks & trading 
  
  Stock trading is the process of the cash that is paid for the stocks is converted into a share in the ownership of a company, which can be converted back to cash by selling. To achieve a profitable return, you either go long or short in markets. When you follow a fixed plan to go long or short in markets, you have a trading strategy. Tradng strategies are usually verified by back testing.
  
* Time series data
  A time series is a sequence of numerical data points taken successve equally spaces points in time. In inesting, a time series trackes the movement of the chosen data points. 
  * Get data source from Yahoo finance.
    ```
    You can use yahoo finance API instead. You'll need to get it first by pip install fix-yahoo-finance.
    
    import pandas as pd
    pd.core.common.is_list_like = pd.api.types.is_list_like
    from pandas_datareader import data, wb
    import fix_yahoo_finance as yf
    yf.pdr_override()
    import numpy as np
    import datetime

    #To get data:

    start = datetime.datetime(2006, 1, 1)
    end = datetime.datetime(2016, 1, 1)
    df = data.get_data_yahoo('MS', start, end)
    ```
  * Get data source from Google finance.
    ```
    import quandl
    aapl = quandl.get("WIKI/AAPL", start_dtae="2006-10-01", end_date="2012-01-01")
    ```
  * Save data in a .csv file
    ```
    import pandas as pd
    aapl.to_csv('aapl.csv')
    df = pd.read_csv('aapl.csv', header = 0, index_col = 'Date', parse_dates=True)
    ```
  * Common Financial Analysis
    * Returns
      * Calculate daily percentage change: `pct_change()`
        * daily percentage change r = Pn/Pre - 1
        * e.g. df.pct_change(), `s = pd.Series([90,89,91]) s.pct_change()`
      * Calculate monthly/quaterly returns: `resample()`
        * 
    * Moving windows 
    * Volatility calculation
    * Ordinary least square regression
    
