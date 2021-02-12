const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

module.exports.executeQuery = (sql) => {
    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        connection.query(sql, (err, result) => {
            if (err) throw err;
            return result;
        })
    });
}