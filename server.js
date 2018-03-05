var sensor = require('ds18x20');
var moment = require('moment');
var express = require('express');
var FirebaseClient = require('firebase-client');
var intervalTime = process.env.INTERVAL_TIME || 600;
var firebaseURL = process.env.FIREBASE_URL;
var deviceName = process.env.RESIN_DEVICE_UUID;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

var firebase = new FirebaseClient({url: firebaseURL});

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.render('index', {temp: null});
});

app.get('/temperature', function(req, res){
  res.send(get_temperature)
});

sensor.list(function (err, listOfDeviceIds) {
    console.log('Available Sensors: '+listOfDeviceIds);
});

function get_temperature() {
  //reads all temp sensors
  sensor.getAll(function (err, tempObj) {
    console.log(tempObj);
  });
}

//start a server on port 80 and log its start to our console
app.listen(80, function () {
  console.log('app running on port 80!')
})
