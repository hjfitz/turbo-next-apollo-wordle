import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda'

import { contextFunction, server } from './server.js'

// largely broken because datasources don't exist??
export const handler = startServerAndCreateLambdaHandler(
	server,
	handlers.createAPIGatewayProxyEventV2RequestHandler(),
	{
		context: contextFunction
	}
)
