import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import '~/styles/globals.css'

import {client} from '../apollo'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default App
