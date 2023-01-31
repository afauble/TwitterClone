<template>
    <div class="h-screen flex-col">

        <div class="p-2  my-2 hover:bg-blue-100 hover:rounded-full w-min
            dark:hover:bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <LogosTwitter />
                </div>
            </nuxt-link>
        </div>
        
        <SidebarLeftTab>
            <template v-slot:icon>
                <HomeIcon />
            </template>
            <template v-slot:title>
                Home
            </template>
        </SidebarLeftTab>
            
    </div>
</template>

<script setup>
    import {HomeIcon} from "@heroicons/vue/solid"
    const { defaultTransition } = useTailwindConfig()
</script>