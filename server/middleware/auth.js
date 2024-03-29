import { getUserById } from "../db/users"
import { decodeAccessToken } from "../utils/jwt"
import UrlPattern from "url-pattern"
import { sendError } from "h3"

export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user',
        '/api/user/tweets'
    ]

    const isHandledByThisMiddleware = endpoints.some(endpoint => {
        const pattern = new UrlPattern(endpoint)

        return pattern.match(event.node.req.url)
    })

    if(!isHandledByThisMiddleware) {
        return
    }

    const token = event.node.req.headers['authorization']?.split(' ')[1]

    const decode = decodeAccessToken(token)

    if(!decode) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        }))
    }

    try {
        const userId = decode.userId
        const user = await getUserById(userId)
        event.context.auth = {user}
    } catch (error) {
        return
    }

})