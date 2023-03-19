import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda'

import { server } from './server.js'

export const handler = startServerAndCreateLambdaHandler(
	server,
	handlers.createAPIGatewayProxyEventV2RequestHandler(),
)
