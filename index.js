const express = require('express');
const app = express();
const port = 8080;
// the next 4 are used for the local json database
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
// the next 3 are to declare the db json file and to init the db 
const adapter = new FileSync('healthyMe_data.json')
const db = low(adapter)
// this sets up the objects that you will write to (like tables in relational database)
db.defaults({ shane_days: [], otherInfo: {} }).write();

// getting everything from db post 
let temp = db.get('shane_days').value();
console.log(temp);
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
  
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    console.log("POST /save-day hit"); 
    console.log(req.query);
    // parse the date of incoming day 
    let day = parseDay(req.query.day);
    // check for day in db to make sure you aren't saving a duplicate day 
    if(isDuplicateDay(day)){
      res.send("duplicate day: so it won't be saved");
      return;
    }
    // save day in db (if it is not a duplicate) 
    saveDay(day);
    res.send(req.query);
});

const parseDay = (day) => {
  day = JSON.parse(day);
  day.date = new Date(day.date);
  // console.log(day);
  return day;
};
const isDuplicateDay = (day) => {
  let days = db.get('shane_days').value();
  // starting with the end, we will check for duplicates (because if its a duplicate day, it'll probably be a recent one) 
  for( let i = days.length - 1; i >= 0; i--){
    let d = days[i];
    d.date = new Date(d.date); // turning the string version of the date back into a date object
    // console.log(d.date);
    // console.log(d.date.getDate());
    if( d.date.getDate() == day.date.getDate() && d.date.getMonth() == day.date.getMonth() && d.date.getYear() == day.date.getYear()){
      return true;
    }
  }
  return false;
};
const saveDay = (day) => {
  day.date = day.date.toString();
  db.get('shane_days').push( 
    {
        date: day.date, 
        calories: day.calories,
        water: day.water,
    }
    ).write();
}
app.listen(port, ()=> {console.log(`local journal running on ${port}`);});