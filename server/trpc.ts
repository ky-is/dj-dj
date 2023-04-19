import { initTRPC } from '@trpc/server'
import superjson from 'superjson'

export const { router, procedure: publicProcedure } = initTRPC.create({
	transformer: superjson,
})
