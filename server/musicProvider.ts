import { OpenAPI, SearchService } from '#c/spotify.api'
import { CLIENT_URL } from '#c/utils'

let accessTokenExpiresAt = Date.now()

async function refreshAccessToken() {
	if (Date.now() + 5000 < accessTokenExpiresAt) {
		return
	}
	try {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			body: new URLSearchParams({
				grant_type: 'client_credentials',
				client_id: process.env.SPOTIFY_CLIENT_ID!,
				client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
				redirect_uri: `${CLIENT_URL}/callback`,
			}),
		})
		const { access_token, expires_in } = await response.json()
		OpenAPI.TOKEN = access_token
		accessTokenExpiresAt = Date.now() + expires_in * 1000
	} catch (error) {
		console.error(error)
	}
}

export async function searchTracks(input: string) {
	await refreshAccessToken()
	const { tracks } = await SearchService.search(input, ['track'], undefined, 5)
	return tracks?.items
}
