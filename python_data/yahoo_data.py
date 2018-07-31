# the following code can be run from terminal with ipython
import pandas as pd
import numpy as np
import datetime
from pandas_datareader import data, wb
import fix_yahoo_finance as yf
pd.core.common.is_list_like = pd.api.types.is_list_like
yf.pdr_override()


#To get data:
start = datetime.datetime(2006, 1, 1)
end = datetime.datetime(2016, 1, 1)
df = data.get_data_yahoo('MS', start, end)

# returned data should be saved in mongo db