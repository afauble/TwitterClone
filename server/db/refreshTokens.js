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

export const removeRefreshToken = (token) => {
    return prisma.refreshToken.delete({
        where: {
            token: token
        }
    })
}