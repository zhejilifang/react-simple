const mysql = require('mysql');
const config = require('./config');

let pool = mysql.createPool(config);

module.exports.query = ($sql, $opt, callback) => {
    console.log($sql);
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query($sql, $opt, function (error, results) {
            connection.release();
            if (error) {
                callback(error);
            } else {
                callback(null, results)
            }
        });
    })

}