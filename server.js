import Fastify from 'fastify'

const fastify = Fastify({ logger: true })

fastify.get('/test', (request, reply) => {
  reply.send({"msg": "api is functioning"})
})

fastify.get('/dev', (request, reply) => {
  reply.send({"msg": "dev route"})
})

// run server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})