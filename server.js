const express = require ('express');
const ConnectDB = require('./Config/ConnectDB');
const ContactRoute = require('./Routes/ContactRoutes');
const app = express();
const port = 5003;

app.use(express.json());

ConnectDB()

//Route principale pour les contacts

app.use('/',ContactRoute);   

app.listen(port,(err)=>
err?console.log(err):console.log(`you are connected successfully to the port ${port}`));