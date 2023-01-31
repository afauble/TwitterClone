<template>
    
    <nuxt-link to="#" class="flex items-center p-3 w-min rounded-full hover:bg-gray-200" :class="defaultTransition">
        
        <div class="w-6 h-6 text-dark" >
            <slot name="icon"></slot>
        </div>
        
        <div class="ml-4 text-xl">
            <slot name="title"></slot>
        </div>
    </nuxt-link>
    
</template>

<script setup>
    const { defaultTransition } = useTailwindConfig()
</script>