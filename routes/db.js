const mysql = require('mysql2');
const db = mysql.createConnection({
    host: '192.168.255.103',
    port: 3306,
    user: "u113_kHjSTAfIlp",
    password: "FMnJAwW!o7Dbe+@HHbT9J2fE",
    database: "s113_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL database");
});

module.exports = db;