import { startStandaloneServer } from '@apollo/server/standalone'

import { contextFunction, server } from './server.js'
import { config } from './config.js'

const { url } = await startStandaloneServer(server, {
	listen: {
		port: config.PORT,
	},
	context: contextFunction,
})

console.log(`🚀  Server ready at: ${url}`)
