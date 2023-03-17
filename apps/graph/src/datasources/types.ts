export interface Word {
	word: string
}

export interface IWordSource {
	getWordOfTheDay(l: number): Word
	getRandomWord(l: number): Word
}
