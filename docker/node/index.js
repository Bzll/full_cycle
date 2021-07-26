const express = require('express');
const app = express()
const port = 3000
const config = {
    host: 'db',
    database: 'nodedb', 
    user: 'root',
    password: 'root'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

var sql = `create table if not exists people(id int not null auto_increment, name varchar(255), primary key(id));`;
connection.query(sql);
sql = `INSERT INTO people(name) values ('Ciro')`;
connection.query(sql);

connection.end();

app.get('/',(req,res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, () =>{
    console.log('Rodando na porta ' + port)
})