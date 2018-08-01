# the following code can be run from terminal with ipython
import pandas as pd
import numpy as np
import datetime
from pandas_datareader import data, wb
import fix_yahoo_finance as yf
import pymongo
import json
import os

pd.core.common.is_list_like = pd.api.types.is_list_like
yf.pdr_override()


#To get data:
start = datetime.datetime(2006, 1, 1)
end = datetime.datetime(2016, 1, 1)
df = data.get_data_yahoo('MS', start, end)

# returned data should be saved in a csv file
df.to_csv('stock_ms.csv', sep=',')

# save data (in csv file) to mongodb
client = pymongo.MongoClient('localhost', 27017)
db = client['stock'] # stock is the database name
MS = 'MS' # MS is collection name 
db_cm = db[MS]
cdir = os.path.dirname(__file__)
file_res = os.path.join(cdir, '/stock_ms.csv')

data = pd.read_csv(file_res)
data_json = json.loads(data.to_json(orient='records'))
db_cm.remove()
db_cm.insert(data_json)


