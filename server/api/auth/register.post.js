import { sendError } from "h3"
import { createUser } from "../../db/users"

export default defineEventHandler(async (event) => {
    const body = await readBody(event) 

    const { username, password, repeatPassword, name, email } = body

    if(!username || !password || !repeatPassword || !name || !email) {
        return sendError(event, createError({ statusCode: 400, statusMessage: "Invalid params"}))
    }

    if(password !== repeatPassword)
        return sendError(event, createError({ statusCode: 400, statusMessage: "Passwords don't match"}))

    const userData = {
        username,
        password,
        name,
        email,
        profileImage: 'https://picsum.photos/200/200'
    }

    const user = await createUser(userData)

    return {
        body: user
    }
})