import { ApolloClient, InMemoryCache } from '@apollo/client'
import { config } from './config'

export const client = new ApolloClient({
	uri: config.GRAPH_API_URL,
	cache: new InMemoryCache(),
})
