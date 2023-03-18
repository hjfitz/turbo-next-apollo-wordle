import { Char } from './Char'
import {GuessToken} from './types'

interface IRowContainerProps {
	chars: GuessToken[]
}

export const RowContainer = ({chars}: IRowContainerProps) => {
	const innerChars = chars.map((char, idx) => ((
		<Char 
			variant={char.state} 
			char={char.char} 
			key={`${char.char} ${char.state} ${idx}`} 
		/>
	)))
	return (
		<div className="flex">
			{innerChars}
		</div>
	)
}
