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
        * ```
          # Import `numpy` as `np`
          import numpy as np

          # Assign `Adj Close` to `daily_close`
          daily_close = aapl[['Adj Close']]

          # Daily returns
          daily_pct_change = daily_close.pct_change()

          # Replace NA values with 0
          daily_pct_change.fillna(0, inplace=True)

          # Inspect daily returns
          print(daily_pct_change)

          # Daily log returns
          daily_log_returns = np.log(daily_close.pct_change()+1)
           
          # Resample `aapl` to business months, take last observation as value 
          monthly = aapl.resample('BM').apply(lambda x: x[-1])

          # Calculate the monthly percentage change
          monthly.pct_change()

          # Resample `aapl` to quarters, take the mean as value per quarter
          quarter = aapl.resample("4M").mean()

          # Calculate the quarterly percentage change
          quarter.pct_change()
          
          # Daily returns
          daily_pct_change = daily_close / daily_close.shift(1) - 1

          # Print `daily_pct_change`
          print(daily_pct_change)
          
          # Import matplotlib
          import matplotlib.pyplot as plt
          
          # Plot the distribution of daily_pct_c
          daily_pct_change.hist(bins=50)
          
          # Pull up summary statistics, describe() is to correctly interpret the histogram 
          print(daily_pct_change.describe())
          
          # Calculate the cumulative daily returns to determine the value of an investment at regular intervals
          cum_daily_return = (1 + daily_pct_change).cumprod()
          
          # Print cum_daiy_return 
          print(cum_daily_return)
          
          # Plot the cumulative dailt returns
          cum_daily_return.plot(figsize=(12, 8))
          
          # Show the pot
          plt.show()
          
          # Resample the cumulative daily return to cumulative monthly return 
          cum_monthly_return = cum_daily_return.
          
          # Print the cum_monthly_return 
          print(cum_monthly_return)
          ```
    * Moving windows 
    * Volatility calculation
    * Ordinary least square regression
    
## Common Trading Strategy 
   * Momentum strategy
     * Divergence/Trend trading 
     * The belief that the movement of a quantity will continue in its current direction. In other words, we believe that stocks have momentum or upward or downward treads, that we can detect and exploit.
       * moving average crossover
       
          `moving average`: a widely used indicator in technical analysis that helps smooth out price action by filtering out the "noise" from random price fluctuations. It is biased on past prices. 
         
         The price of an asset moves from one side of a moving average to the other. this crossover represents a change in momentum and can be used as a point of making the decision to enter or exit the market.
       * dual moving average
       
         When a short-term average crosses a long-term average. This signal is used to identify that momentum is shifting in the direction of the short-term average. A `buy` signal is generated when the short-term average crosses the long-term average and rises above it, while a `sell` signal is triggered by a short-term avergae crossing long-term average and falling below it.
       * turtle trading 
       
         A well-known trend following strategy that was orginally taught by Richard Dennis. The basic strategy is to buy futures on a 20-day high, and sell on a 20-day low.  
       
   * Reversion strategy
     * Convergence/Cycle trading 
       
       The belief that the movement of a quantity will eventually reverse. 
       
       * mean revision strategy 
       
         We actually believe that stocks return to their mean and that you can exploit when it deviates from that mean. 
       * pairs trading mean-reversion
       
         If two stocks can be identified that have a relatively high correlation, the change in the difference in price netween the two stocks can be used to signal trading events if one of the two moves out of correlation with the other. 
         
       * forecating strategy
       
         It attempts to predict the direction or value of a stock in subsequent future time periods based on certain historical factors. 
         
       * high frequency trading strategy
         
         It exploits the sub-millisecond market microstrcuture. 
   * A simple tradig strategy
     * Define 2 different lookback periods: a short window and a long window, which are indicated by 2 variables, and each with an integer. We have to make sure that the integer for short window is smaller than the one for long window. 
     
