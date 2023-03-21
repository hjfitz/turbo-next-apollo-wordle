import { useSettings } from '~/hooks/useGameSettings'

export const GameSettings = () => {
	const {gameMode, setGameRandom, setGameDaily} = useSettings()

	return (
		<div className="container mx-auto max-w-screen-md w-screen-md">
			<p onClick={setGameRandom}>Random Word</p>
			<p onClick={setGameDaily}>Daily Word</p>
		</div>
	)

}
