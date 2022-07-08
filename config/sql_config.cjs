const mysql = require('mysql2')

const dok_db_conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'dokkumento',
  password: 'documents',
  port: 3307
})

console.log(dok_db_conn)

export default { dok_db_conn }