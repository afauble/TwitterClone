<template>
    <div>
        <MainSection title="Home" :loading="loading">

            <Head>
                <Title>Home / Twitter</Title>
            </Head>

            <div class="border-b" :class="twitterBorderColor">
                <TweetForm :user="user"/>
            </div>

            <TweetListFeed :tweets="homeTweets"/>
            
        </MainSection>
    </div>
</template>


<script setup>
    const homeTweets = ref([])
    const { getHomeTweets } = useTweets()
    
    const { twitterBorderColor } = useTailwindConfig()
    
    const loading = ref(false)
    const { useAuthUser } = useAuth()
    const user = useAuthUser()

    onBeforeMount(async () => {
        loading.value = true
        try {
            const { tweets } = await getHomeTweets()
            homeTweets.value = tweets
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false
        }
    })

</script>