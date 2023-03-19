import { z } from 'zod'

const configMap = {
	GRAPH_API_URL: process.env.NEXT_PUBLIC_GRAPH_API_URL,
}

const configSchema = z.object({
	GRAPH_API_URL: z.string(),
})

export const config = configSchema.parse(configMap)
