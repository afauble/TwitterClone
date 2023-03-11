<template>
    <div class="h-screen flex-col">

        <div class="p-2  my-2 hover:bg-blue-100 rounded-full w-min
            dark:hover:bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <LogosTwitter />
                </div>
            </nuxt-link>
        </div>
        
        <div class="mt-2 space-y-3">
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:title>
                    Home
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <HashtagIcon />
                </template>
                <template v-slot:title>
                    Explore
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BellIcon />
                </template>
                <template v-slot:title>
                    Alerts
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <InboxIcon />
                </template>
                <template v-slot:title>
                    Bookmarks
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:title>
                    Messages
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:title>
                    Profile
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <DocumentTextIcon />
                </template>
                <template v-slot:title>
                    Lists
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <DotsCircleHorizontalIcon />
                </template>
                <template v-slot:title>
                    More
                </template>
            </SidebarLeftTab>
        </div>
            
    </div>
</template>

<script setup>
    import { HomeIcon } from "@heroicons/vue/solid"
    import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, DotsCircleHorizontalIcon } from "@heroicons/vue/outline"
    const { defaultTransition } = useTailwindConfig()
</script>