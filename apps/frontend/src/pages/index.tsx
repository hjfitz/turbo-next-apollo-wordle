import { gql, useQuery } from '@apollo/client'
import Head from 'next/head'

import {Game, Loader} from '../components'

const DAILY_WORD = gql`
  query getDailyWord($length: Int!) {
	  wordOfTheDay(length: $length) {
		word
	  }
	}
`;


const Home = () => {
  const {data, loading, error} = useQuery(DAILY_WORD, {
    variables: {
	  length: 5
	}
  })
  return (
    <>
      <Head>
        <title>Wordle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-stone-900 text-white min-h-full">
		<header className="border-b-zinc-500 border-b">
			<div className="container mx-auto">
				<h1 className="text-center text-4xl p-4 w-full">Wordle</h1>
			</div>
		</header>
	  	<div className="container mx-auto h-full">
			<Loader loading={loading} error={error}>
				<div className="flex justify-center">
					{data && <Game word={data.wordOfTheDay.word} numGuesses={5} /> }
				</div>
			</Loader>
		</div>
      </main>
    </>
  )
}

export default Home
