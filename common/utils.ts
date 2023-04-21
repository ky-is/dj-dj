export const TESTING = process.env.NODE_ENV !== 'production'

export const CLIENT_URL = TESTING ? 'http://localhost:3200' : 'https://dj-dj.netlify.app'
