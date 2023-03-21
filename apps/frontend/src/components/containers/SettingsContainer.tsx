import { ReactElement, useState } from 'react'
import { GameMode, SettingsContext } from '~/providers/GameSettings'

interface ISettingsContainerProps {
	children: ReactElement
}

export const SettingsContainer = ({children}: ISettingsContainerProps) => {
	const [gameMode, setGameMode] = useState(GameMode.WordOfTheDay)
	return (
		<SettingsContext.Provider value={{gameMode, setGameMode}}>
			{children}
		</SettingsContext.Provider>
	)
}
