import { prisma } from "."


export const createRefreshToken = (tokenData) => {
    return prisma.refreshToken.create({
        data: tokenData
    })
}