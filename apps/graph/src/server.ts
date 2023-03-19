import { ApolloServer } from '@apollo/server'

import { resolvers } from './resolvers.js'
import { typeDefs } from './typedefs.js'
import { IWordSource } from './datasources/types.js'

interface ContextValue {
	dataSources: {
		wordSource: IWordSource
	}
}

export const server = new ApolloServer<ContextValue>({
	typeDefs,
	resolvers,
})
