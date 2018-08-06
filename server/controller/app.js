const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001 // running on port 3001

app.use(cors())

//for post url
var bodyParser =  require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes will go here
app.get('/', (req, res) => res.send('Hello World!'))


//can be tested via: http://localhost:3001/api/stocks?stock=AAPL&date=2016/1/1 on broswer
app.get('/api/stocks', function (req, res) {
    var stock_name = req.param('stock');
    var date = req.param('date');

    res.send(stock_name + ' ' + 'at ' + date);
});

//name the parameter directly in the route itself
//can be tested via: http://localhost:3001/api/1 on broswer
app.get('/api/:version', function(req, res) {
    res.send(req.params.version)
})

//can be tested on postman via: application/x-www-form-urlencoded
app.post('/api/stocks', function(req, res) {
    var stock_name = req.body.stock;
    var date = req.body.date

    res.send(stock_name + ' and ' + date + ' are received from react reducer');
});


//start the server
app.listen(port)
console.log('Server started at http://localhost: ' + port)
