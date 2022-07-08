import Fastify from 'fastify'
import mysql from 'mysql2'

const fastify = Fastify({ logger: true })

const dok_db_conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'dokkumento',
  password: 'documents',
  port: 3307
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0
})

fastify.get('/test', (request, reply) => {
  reply.send({"msg": "api is functioning"})
})

fastify.get('/dev', (request, reply) => {
  dok_db_conn.query('SELECT * FROM documents', (err, results, fields) => {
    if (err) return reply.send({"msg": 'dev route', err})
    return reply.send({"msg": 'dev route', results})
  })
})


// run server
fastify.listen({ port: 3000 }, (err, address) => {
  dok_db_conn.connect((err) => {
    if (err) {
      console.error('Error Connecting to Main DB: ' + err.stack)
      return
    }
  })

  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log('Main DB Connected: ' + dok_db_conn.threadId)
})