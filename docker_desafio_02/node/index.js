const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    database: 'nodedb', 
    user: 'root',
    password: 'root'
};
const mysql = require('mysql');
var connection = mysql.createConnection(config);

var sql = `create table if not exists people(id int not null auto_increment, name varchar(255), primary key(id));`;
connection.query(sql);
sql = `INSERT INTO people(name) values ('Ciro')`;
connection.query(sql);

connection.end();

app.get('/',(req,res) => {
    var response = ('<h1>Full Cycle</h1>')

    connection = mysql.createConnection(config)
    connection.query("SELECT * FROM people", function(err, result){
        if (err) throw err;
        response += '<br>' + result[0]['name'];
        res.send(response);
    })
})

app.listen(port, () =>{
    console.log('Rodando na porta ' + port)
})