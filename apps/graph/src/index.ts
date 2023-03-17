import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { resolvers } from './resolvers.js'
import { typeDefs } from './typedefs.js'
import { DatasourceFactory, IWordSource } from './datasources/index.ts'

interface ContextValue {
	dataSources: {
		wordSource: IWordSource
	}
}

const server = new ApolloServer<ContextValue>({
	typeDefs,
	resolvers,
})

const { url } = await startStandaloneServer(server, {
	listen: { port: 3001 },
	context: async () => {
		return {
			dataSources: {
				wordSource: DatasourceFactory.buildWordApi()
			}
		}
	}
})

console.log(`🚀  Server ready at: ${url}`)
