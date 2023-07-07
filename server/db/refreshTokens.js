import { prisma } from "."


export const createRefreshToken = (tokenData) => {
    return prisma.refreshToken.create({
        data: tokenData
    })
}

export const getRefreshTokenByToken = (token) => {
    return prisma.refreshToken.findUnique({
        where: {
            token
        }
    })
}