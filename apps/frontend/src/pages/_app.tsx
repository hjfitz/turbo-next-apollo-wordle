import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import '~/styles/globals.css'

import {client} from '~/apollo'
import { SettingsContainer } from '~/components/containers/SettingsContainer'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ApolloProvider client={client}>
			<SettingsContainer>
				<Component {...pageProps} />
			</SettingsContainer>
		</ApolloProvider>
	)
}

export default App
