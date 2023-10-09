<template>
    <div>
        <ul >
            <TweetItem v-for="tweet in props.tweets" :tweet="tweet" :key="tweet.id"/>
        </ul>
    </div>
</template>

<script setup>

    const props = defineProps({
        tweets: {
            type: Array,
            required: true
        }
    })
</script>