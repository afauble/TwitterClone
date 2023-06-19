import { getUserByUsername } from "~~/server/db/users"
import { userTransformer } from "~~/server/transformers/user"
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt"
import { createRefreshToken } from "~~/server/db/refreshTokens"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    const { username, password } = body
    
    if(!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid params"
        }))
    }

    // Is the user registered
    const user = await getUserByUsername(username)
    if(!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Username or password is invalid"
        }))
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if(!isPasswordMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Username or password is invalid"
        }))
    }

    // Generate token
    const { accessToken, refreshToken } = generateTokens(user)

    // Save inside db
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    // Add http cookie
    sendRefreshToken(event, refreshToken)

    return {
        accessToken: accessToken,
        user: userTransformer(user)
    }

})