import Fastify from 'fastify'
import FastifyCORS from '@fastify/cors'

import { TESTING } from '#c/utils.js'

import { APIError } from '#s/errors.js'

const clientURL = TESTING ? 'http://localhost:3200' : 'https://dj-dj.netlify.app'

const fastify = Fastify({
	logger: true,
})

fastify
	.register(FastifyCORS, {
		origin: clientURL,
	})
	.setErrorHandler((error, request, reply) => {
		if (error instanceof APIError) {
			reply.statusCode = 400
			reply.send({ message: error.message, cancel: error.cancel })
		} else {
			throw error
		}
	})
	.after(() => {
	})

fastify.listen({
	port: process.env.PORT != null ? parseInt(process.env.PORT) : 3201,
}, (error) => {
	if (error != null) {
		throw error
	}
})
