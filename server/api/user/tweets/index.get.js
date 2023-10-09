import { tweetTransformer } from "~/server/transformers/tweet"
import { getTweets } from "~/server/db/tweet"

export default defineEventHandler(async() => {

    const tweets = await getTweets({
        include: {
            author: true,
            mediaFile: true,
            replies: {
                include: {
                    author: true
                }
            },
            replyTo: {
                include: {
                    author: true
                }
            }
        },
        orderBy: [
            {
                createdAt: 'desc'
            }
        ]
    })

    return {
        tweets: tweets.map(tweetTransformer)
    }
})