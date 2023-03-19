import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

import { WordSource } from './word.datasource.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export class DatasourceFactory {
	static buildWordApi(): WordSource {
		const dir = path.join(__dirname, '../wordlist_prod')
		const wordList = fs.readFileSync(dir).toString().split('\n').map(l => l.replace('\r', ''))
		return new WordSource(wordList)
	}
}
