<template>
    <div>
        <h1>list feed</h1>

        <ul v-for="tweet in props.tweets">
            {{ tweet.text }}
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