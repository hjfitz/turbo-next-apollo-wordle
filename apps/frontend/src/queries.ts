import { gql } from '@apollo/client'

export const DAILY_WORD = gql`
	query getDailyWord($length: Int!) {
		wordOfTheDay(length: $length) {
			word
		}
	}
`

export const RANDOM_WORD = gql`
	query getRandomWord($length: Int!) {
		randomWord(length: $length) {
			word
		  }
	}
`
