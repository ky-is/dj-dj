import { createTRPCProxyClient, httpLink } from '@trpc/client'
import superjson from 'superjson'

import type { AppRouter } from '#s/index'
import { TESTING } from '#c/utils'

const endpointURL = TESTING ? 'http://localhost:3201' : 'https://dj-dj.netlify.app'

const trpc = createTRPCProxyClient<AppRouter>({
	transformer: superjson,
	links: [
		httpLink({
			url: endpointURL,
		}),
	],
})

export default trpc
