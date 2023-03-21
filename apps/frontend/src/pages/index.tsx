import Head from 'next/head'

import { Game, Header, Loader } from '~/components'
import { GameSettings } from '~/components/Settings'
import { useGameQuery } from '~/hooks/useGameQuery'

const Home = () => {
	const {word, loading, error} = useGameQuery()

	return (
		<>
			<Head>
				<title>Wordle</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="min-h-full text-white bg-stone-900">
				<Header />
				<GameSettings />
				<div className="container mx-auto h-full">
					<Loader loading={loading} error={error}>
						<div className="flex justify-center">
							{word && <Game word={word} numGuesses={5} /> }
						</div>
					</Loader>
				</div>
			</main>
		</>
	)
}

export default Home
