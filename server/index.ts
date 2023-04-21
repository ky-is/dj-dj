/// <reference lib="dom" />
import { config as dotenvConfig } from 'dotenv'
dotenvConfig({ path: 'server/.env' })

import { createHTTPServer } from '@trpc/server/adapters/standalone'
import cors from 'cors'
import { z } from 'zod'

import { CLIENT_URL } from '#c/utils'

import { publicProcedure, router } from '#s/trpc'
import { searchTracks } from '#s/musicProvider'

const appRouter = router({
	songSearch: publicProcedure
		.input(z.string())
		.query(async ({ input }) => {
			try {
				return await searchTracks(input)
			} catch (error) {
				console.log(error)
				return { error }
			}
		}),
})

export type AppRouter = typeof appRouter

const server = createHTTPServer({
	router: appRouter,
	middleware: cors({
		origin: CLIENT_URL,
	}),
})

server.listen(process.env.PORT != null ? parseInt(process.env.PORT) : 3201)
