/// <reference lib="dom" />
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import cors from 'cors'
import { z } from 'zod'

import { TESTING } from '#c/utils.js'

import { publicProcedure, router } from '#s/trpc.js'

const clientURL = TESTING ? 'http://localhost:3200' : 'https://dj-dj.netlify.app'

const appRouter = router({
	songSearch: publicProcedure
		.input(z.string())
		.query(async ({ input }) => {
			try {
				const response = await fetch(`https://api.spotify.com/v1/search?query=${input}&type=track&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=20"`, {

				})
				const json = await response.json()
				console.log(json)
			} catch (error) {
				console.log(error)
			}
			return input
		}),
})

export type AppRouter = typeof appRouter

const server = createHTTPServer({
	router: appRouter,
	middleware: cors({
		origin: clientURL,
	}),
})

server.listen(process.env.PORT != null ? parseInt(process.env.PORT) : 3201)
