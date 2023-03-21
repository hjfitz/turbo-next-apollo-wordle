import { useContext } from 'react'
import { GameMode, SettingsContext } from '~/providers/GameSettings'


export function useSettings() {
	const {gameMode, setGameMode} = useContext(SettingsContext)
	const setGameRandom = () => setGameMode(GameMode.Random)
	const setGameDaily = () => setGameMode(GameMode.WordOfTheDay)

	return {
		gameMode,
		setGameRandom,
		setGameDaily,
	}
}
