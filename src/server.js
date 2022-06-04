const express = require("express");
const app = express();
const {sequelize} = require("./models/model")
sequelize.sync({force: true}).then(()=>{console.log('ok')}).catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: true}));

const routesIndex = require('./routes/routes')
app.use('/', routesIndex)


app.listen(3000, ()=>console.log('http://localhost:3000'))