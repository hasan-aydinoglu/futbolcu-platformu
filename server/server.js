var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
app.use(express.json());




// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'futbolcu',
    port: 3306,
    password: 'Hasanmutlu12?',
    database: 'futbol'
});


// connect to database
dbConn.connect();


// Retrieve all users 
app.get('/profil', function (req, res) {

    dbConn.query('SELECT * FROM profil ', function (error, results, fields) {
        
        if (error) {
            throw error;
        }

        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "X-Requested-With");
        req.header('Content-Type', 'application/json');
        req.json = true;

        console.log("cagrildi...");
        console.log(results);

        return res.send(results);
    })
});



// Retrieve profil with adSoyad 
app.get('/profil/:adSoyad', function (req, res) {

    let adSoyad  = req.params.adSoyad ;

    if (!adSoyad) {
        return res.status(400).send({ error: true, message: 'Please provide adSoyad' });
    }

    dbConn.query('SELECT * FROM profil WHERE adSoyad=?', adSoyad, function (error, results, fields) {
        if (error) throw error;

        return res.send(results);
    });
});



 app.post('/add-futbolcu', function (req, res) {

     console.log("adi: " + req.body.adSoyad);
    
    const adSoyad = req.body.adSoyad;
    const yas = req.body.yas;
    const uyruk = req.body.uyruk;
    const boy = req.body.boy;
    const kilo = req.body.kilo;
    const pozisyon = req.body.pozisyon;
    const ayak = req.body.ayak;



     dbConn.query("INSERT INTO profil SET ? ", {
         adSoyad: adSoyad, yas: yas, uyruk: uyruk, boy: boy, kilo: kilo, 
         pozisyon: pozisyon , ayak: ayak 
    
     }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, messege: 'New add has been created successfully.' });
     });



 });

 

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;