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
        
        <!-- Tabs -->
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

        <!-- Profile & Logout -->
        <div class="flex flex-row items-center justify-center px-2 py-2 mx-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-slate-800" :class="defaultTransition" @click="emits('onLogout')">

            <div class="flex flex-row">
                <img :src="props.user.profileImage" class="w-10 h-10 rounded-full">
                <div class="flex-col hidden ml-2 xl:block">
                    <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                        {{ user.name }}
                    </h1>
                    <p class="text-sm text-gray-400">
                        @{{ user.username }}
                    </p>
                </div>
            </div>

            <div class="hidden ml-auto xl:block">
                <div class="w-6 h-6">
                    <ChevronDownIcon />
                </div>
            </div>

        </div>

        <!-- Tweet btn -->
        <div class="hidden xl:block">
            <UIButton liquid size="lg" class="font-bold">Tweet</UIButton>
        </div>
        <!-- Tweet btn -->
        <div class="block xl:hidden">
            <UIButton>
                <div class="w-6 h-6">
                    <PencilIcon/>
                </div>
            </UIButton>
        </div>
    </div>
</template>

<script setup>
    import { HomeIcon } from "@heroicons/vue/solid"
    import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, DotsCircleHorizontalIcon, ChevronDownIcon, PencilIcon } from "@heroicons/vue/outline"
    const { defaultTransition } = useTailwindConfig()
    const emits = defineEmits(['onTweet', 'onLogout'])
    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })
</script>