// ask for the packages 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//define port for the server 
const PORT=3000;

// us the packages 
const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/',function(req,res){
    res.send('Hello from server');
})

app.post('/enroll', function(res, res){
    console.log(res.body);
    res.status(200).send({"message": "Data recived"}); // it is success messgae
    //  res.status(400).send({"message": "Data recived"}); // it is a error message
    
})

app.listen(PORT, function(){
    console.log("Server running on location:" + PORT);
});

//http://localhost:3000/