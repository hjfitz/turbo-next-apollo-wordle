import { z } from 'zod'

import dotenv from 'dotenv-flow'

dotenv.config()

const configMap = {
	PORT: process.env.PORT,
}

const configSchema = z.object({
	PORT: z.coerce.number()
})

export const config = configSchema.parse(configMap)
