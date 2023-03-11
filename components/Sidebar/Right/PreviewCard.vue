<template>
    <div class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700" :class="twitterBorderColor">
        
        <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white" :class="twitterBorderColor">
            {{ props.title }}
        </h1>

        <slot></slot>

        <div class="p-3 test-sm text-blue-400 curser-pointer rounded-b-2xl hover:bg-gray-200 dark:hover:bg-dim-300" :class="defaultTransition">
            Show more
        </div>

    </div>


</template>

<script setup>

    const props = defineProps({
        title: {
            type: String,
            required: true
        }
    })

    const { twitterBorderColor, defaultTransition } = useTailwindConfig()

</script>