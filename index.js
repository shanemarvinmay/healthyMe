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

app.post('/update-daily-calories', (req,res) => { 
    res.send('update-daily-calories reached');
});
app.post('/update-daily-water', (req,res) => { 
    res.send('update-daily-water reached');
});

app.listen(port, ()=> {console.log(`local journal running on ${port}`);});