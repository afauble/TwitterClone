import { tweetTransformer } from "~/server/transformers/tweet"
import { getTweets } from "~/server/db/tweet"

export default defineEventHandler(async(event) => {

    let primsaQuery = {
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
    }

    const tweets = await getTweets(primsaQuery)


    return {
        tweets: tweets.map(tweetTransformer)
    }
})