export const typeDefs = `#graphql
  type WordOfTheDay {
	  word: String!
  }

  type Query {
	  wordOfTheDay(length: Int!): WordOfTheDay!
	  randomWord(length: Int): WordOfTheDay!
  }
`

