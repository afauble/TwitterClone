import { removeRefreshToken } from "../../db/refreshTokens"

export default defineEventHandler(async (event) => {
    try {
        const refreshToken = getCookie(event, 'refresh_token')
        await removeRefreshToken(refreshToken)
    } catch (error) {
        console.log(error)
    }

    sendRefreshToken(event, null)

    return { message: 'Logged Out'}
})