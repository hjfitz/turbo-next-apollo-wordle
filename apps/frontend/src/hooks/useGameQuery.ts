import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import { GameMode } from '~/providers/GameSettings'
import { DAILY_WORD, RANDOM_WORD } from '~/queries'
import { useSettings } from '~/hooks/useGameSettings'

export function useGameQuery(wordLength = 5) {
	const {gameMode} = useSettings()
	const [curQuery, setCurQuery] = useState(DAILY_WORD)

	useEffect(() => {
		if (gameMode === GameMode.WordOfTheDay)
			setCurQuery(DAILY_WORD)

		if (gameMode === GameMode.Random)
			setCurQuery(RANDOM_WORD)
	}, [gameMode])

	const {data, loading, error} = useQuery(curQuery, {
		variables: {length: wordLength}
	})


	const word = gameMode === GameMode.Random ? data?.randomWord?.word : data?.wordOfTheDay?.word

	return {word, loading, error}
}
