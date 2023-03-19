import { startStandaloneServer } from '@apollo/server/standalone'

import { DatasourceFactory } from './datasources/index.js'
import { server } from './server.js'
import { config } from './config.js'

const { url } = await startStandaloneServer(server, {
	listen: {
		port: config.PORT,
	},
	context: async () => {
		return {
			dataSources: {
				wordSource: DatasourceFactory.buildWordApi()
			}
		}
	}
})

console.log(`🚀  Server ready at: ${url}`)
