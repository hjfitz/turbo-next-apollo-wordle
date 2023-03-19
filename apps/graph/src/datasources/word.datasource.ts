import type { IWordSource } from './types.js'

export class WordSource implements IWordSource {
	constructor(private readonly wordList: string[]) {}

	private getDayOfYear() {
		const now = new Date()
		const start = new Date(now.getFullYear(), 0, 0)
		const diff = (now.valueOf() - start.valueOf()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
		const oneDay = 86400000 
		return ~~(diff / oneDay)
	}

	public getWordOfTheDay(length: number) {
		const day = this.getDayOfYear()
		const relevant = this.wordList.filter(word => word.length === length)
		return {
			word: relevant[day % relevant.length]
		}
	}

	public getRandomWord(length = 5) {
		const relevant = this.wordList.filter(word => word.length === length)
		const idx = ~~(Math.random() * relevant.length)
		return {
			word: relevant[idx]
		}
	}

}
