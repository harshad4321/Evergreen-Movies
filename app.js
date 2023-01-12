const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

const app = express()

var engines = require('consolidate');
var swig = require('swig')

const port = process.env.PORT || 3000

// app.engine('html', cons.swig)




app.engine('html', engines.swig);
app.set('views', __dirname + '/layout');
app.set('view engine', 'html');

const usersRoute = require('./router/index.js')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRoute)

app.listen(port, () => {
    console.log(`server running on port :${port}`)
})




module.exports = app;