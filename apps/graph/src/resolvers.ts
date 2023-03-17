export const resolvers = {
	Query: {
		wordOfTheDay: (_, { length }, { dataSources }) => {
			return dataSources.wordSource.getWordOfTheDay(length)
		},

		randomWord: (_, { length }, { dataSources }) => {
			return dataSources.wordSource.getRandomWord(length)
		},

	}
}
