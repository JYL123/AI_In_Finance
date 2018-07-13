### Algorithmic trading 
`Algorithmic trading` refers to the computerised, automated trading of financial instruments (based on some algorithm or rule) with litter or no human intervention during the trading hours. 

### Objective of the project
To implement a complete algorithmic trading project, from backtesting to performing automated, real-time trading. 
* `Backtesting`: the process of testing a trading strategy on releveant historical data to ensure its viability before the trader tisks any actual capital. 

### Elements of the project
* **Strategy**: time series momentum strategy, which assumes a financia instrument that has performed well/badly will continue to do so. 
* **Platform**: `Oanda`: allows us to trade a variety of leveraged `contracts for differences (CFDs)`, which essentially allow for directional bets on a diverse set of financial instruments(e.g. currencies, stock indices, commodies).
  * `Contracts for differences (CFDs)`: an agreement made in the future contract whereby differences in settlement are made through cash payment, rather than by the delivery of physical goods or securities. 
  * `Directional strategy`: any trading or investment strategy that entails taking a net long or short position in a market. It is betting on the direction the overall market is going to move in. A trader who is net long will benefit from a rise in ithe market. One who is mnet shrt will benefit from a decline. Directional strategies are the opposite of market neutural strategies. 
* **Data**: get streaming data from `Oanda`
* **Software**: python + pandas

### Preparation 

* Install `OandaPy`: 
```
pip install v20
pip install oandapyV20
```
* Oanda account credential:
```
Username: jyl123
Password: your_password
```
  
  

