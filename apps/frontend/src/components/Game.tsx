import { KeyboardEvent, useEffect, useState } from 'react'
import {GuessToken, GuessState, RowContainer} from './Row'

export interface IGameProps {
	word: string
	numGuesses: number
}



enum GameState {Playing, Won, Lost}

function createGuessLineup(numGuesses: number): GuessToken[][] {
	return Array.from({length: numGuesses}, 
		() => Array.from({length: 5}, () => ({char: ' ', state: GuessState.NoGuess}))
	)
}

function padEnd<T>(array: T): T {
	return Object.assign(new Array(5).fill(' '), array)
}

export const Game = ({word, numGuesses}: IGameProps) => {
	const [curGuess, setCurGuess] = useState<string[]>([])
	const [guesses, setGuesses] = useState<GuessToken[][]>(createGuessLineup(numGuesses))
	const [gameState, setGameState] = useState(GameState.Playing)

	useEffect(() => {
		document.addEventListener('keyup', updateGuess)
		return () => document.removeEventListener('keyup', updateGuess)
	}, [])

	function updateGuess(ev: any) {
		if (gameState !== GameState.Playing)
			return

		if (ev.key === 'Enter') 
			submitGuess()

		if (ev.key === 'Backspace') 
			setCurGuess(cur => ([...cur.slice(0, cur.length - 1)]))

		if (ev.key.length !== 1) return
		setCurGuess(cur => {
			if (cur.length === numGuesses) return cur
			return [...cur, ev.key]
		})
	}

	function submitGuess() {
		// map over all guesses and ensure tokens are appropriate
		setGuesses(curGuesses => {
			return curGuesses.map(row => {
				return row.map(({char}, idx) => {
					if (char.trim() === '') 
						return {char: ' ', state: GuessState.NoGuess}
					
					if (word[idx] === char) 
						return {char, state: GuessState.CorrectPlace}
					
					if (word.includes(char)) 
						return {char, state: GuessState.WrongPlace}
					
					return {char, state: GuessState.WrongChar}
				})
			})
		})
		setCurGuess([])
	}

	useEffect(() => {
		setGuesses(curGuesses => {
			const tokens = padEnd(curGuess).map(char => ({char, state: GuessState.NoGuess}))
			const cloned = [...curGuesses]
			const idx = cloned.findIndex(row => row[0].state === GuessState.NoGuess)
			cloned[idx] = tokens
			return cloned
		})
	}, [curGuess])

	useEffect(() => {
		const mostRecentGuess = guesses.findLast(g => g[0].state !== GuessState.NoGuess)
		const hasWon = mostRecentGuess?.every(g => g.state === GuessState.CorrectPlace)
		if (hasWon) {
			setGameState(GameState.Won)
		}

		const hasLost = guesses.every(attempt => attempt.every(char => char.state !== GuessState.NoGuess))
		if (hasLost) {
			setGameState(GameState.Lost)
		}
	}, [guesses])

	useEffect(() => {
		if (gameState !== GameState.Playing)
			document.removeEventListener('keyup', updateGuess)
	}, [gameState])

	return (
		<section>
			{guesses.map((guessChars, idx) => <RowContainer chars={guessChars} key={idx} />)}
		</section>
	)

}
