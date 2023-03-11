<template>
    <div class="p-3 hover:bg-gray-200 curser-pointer dark:hover:bg-dim-300 border-b" :class="wrapperClasses">

        Item

    </div>

</template>

<script setup>

    const { defaultTransition, twitterBorderColor } = useTailwindConfig()

    const wrapperClasses = computed( () => '${defaultTransition} ${twitterBorderColor}')

</script>