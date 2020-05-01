const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api')
var cors = require('cors');
const app = express();

require('./db')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/api',apiRouter);

app.listen(process.env.PORT||3000,()=>{
    console.log('servidor arrancado');
});
