const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    const pathToFile = __dirname + '/index.html';
    res.sendFile(pathToFile);
});

app.post('/saveEntries', (req,res) => { 
    
});

app.listen(port, ()=> {console.log(`local journal running on ${port}`);});