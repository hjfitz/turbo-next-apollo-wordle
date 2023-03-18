
export enum GuessState { WrongPlace, CorrectPlace, WrongChar, NoGuess }


export interface GuessToken {
	char: string
	state: GuessState
}
