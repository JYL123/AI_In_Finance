const Stock = require ('./../stocks') //install mongoose
const fs = require ('fs') //install fs

module.exports = {
    addStocks: (req, res, next) => {
        let {name, date, open, high, low, close, adj_close, volume} = req.body
        saveStocks({name, date, open, high, low, close, adj_close, volume})
    }
}

    function saveStocks(obj) {
        new Stock(obj).save((err, stock) => {
            if (err) 
                res.send(err)
            else if (!stock)
                res.send(400)
            else {
                return res.send(_stock)
            }

            next()
        }) 
    }

