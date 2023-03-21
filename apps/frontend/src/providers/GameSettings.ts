import {Dispatch, createContext, useContext} from 'react'

export enum GameMode {Random, WordOfTheDay}

interface ISettingsContext {
	gameMode: GameMode,
	setGameMode: Dispatch<GameMode>
}

export const SettingsContext = createContext<ISettingsContext>({
	gameMode: GameMode.WordOfTheDay,
	setGameMode: (g: GameMode) => {},
})
