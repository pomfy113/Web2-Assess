var express = require('express')
var app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {

    console.log("Testing");

    fetch("./MOCK_DATA.csv").then((res) => {
        return res.text();
    }).then((data) =>{
        const lines = data.split('\n');
        const keys = lines.shift().split(',');
        console.log(keys);
    }).catch((err) => {
        console.log(err.message);
    });

})

app.listen(3000, function () {
  console.log('Portfolio App listening on port 3000!')
})
