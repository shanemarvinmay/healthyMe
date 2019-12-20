const express = require('express');
const app = express();
const port = 8080;
/* 
MAKE SURE YOU DO NOT SAVE A DAY DUPLICATE TIMES!!!
if the cookie you are trying to save is already saved then
simply don't save it
bc that means that the day object was sent to be send and it more accurate than cookie because it is updated during every interaction (unlike the cookie)
*/

app.get('/', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    const pathToFile = __dirname + '/index.html';
    res.sendFile(pathToFile);
});

app.post('/save-day', (req,res) => { 
    /* MAKE SURE TO CHECK THAT YOU AREN'T SAVING A DUPLICATE DAY! */
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    console.log("POST /save-day hit"); 
    console.log(req.query);
    // parse the date of incoming day 
    // check for day in db to make sure you aren't saving a duplicate day 
    // save day in db (if it is not a duplicate) 
    res.send(req.query);
});


app.listen(port, ()=> {console.log(`local journal running on ${port}`);});