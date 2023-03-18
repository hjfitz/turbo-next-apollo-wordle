import {GuessState} from './types'

interface ICharProps {
	variant: GuessState
	char: string
}

const classNameLookup: Record<GuessState, string> = {
	[GuessState.NoGuess]: 'border-2 border-gray-500',
	[GuessState.WrongChar]: 'bg-zinc-700',
	[GuessState.WrongPlace]: 'bg-yellow-500',
	[GuessState.CorrectPlace]: 'bg-green-600',
}

export const Char = ({variant, char}: ICharProps) => {
	const decor = classNameLookup[variant]
	return (
		<span className={`flex justify-center items-center inline-block m-4 w-24 h-24 leading-10 text-center ${decor}`}>
			<p className="text-3xl">{char}</p>
		</span>
	)
}
