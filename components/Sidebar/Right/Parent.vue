<template>
    <div class="flex flex-col">

        <!-- Preview Card : What's happening? -->
        <SidebarRightPreviewCard title="What's happening">

            <SidebarRightItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="font-bold text-gray-900 text-md dark:text-white">{{ whatsHappening.title }}</h2>
                    <p class="text-xs text-gray-400 dark:text-gray-400">{{ whatsHappening.count }}</p>
                </div>
            </SidebarRightItem>

        </SidebarRightPreviewCard>

        <!-- Preview Card : Who to follow? -->
        <SidebarRightPreviewCard title="Who to follow">

            <SidebarRightItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row justify-between items-center p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" alt="img">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white ">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button class="px-4 py-2 font-bold text-xs rounded-full text-white bg-black dark:bg-white dark:text-black">Follow</button>
                    </div>
                </div>

            </SidebarRightItem>

        </SidebarRightPreviewCard>



    </div>
</template>

<script setup>

    const whatsHappeningItems = ref([
        {
            title: '#SpaceX',
            count: '18.8k Tweets'
        },
        {
            title: '#Amazon',
            count: '9.0k Tweets'
        },
        {
            title: '#Demon Slayer',
            count: '2.1k Tweets'
        }])
    
    const whoToFollowItems = ref([
        {
            name: 'Andrew Fauble',
            handle: '@Faubs',
            image: 'https://picsum.photos/200/200'

        },
        {
            name: 'Joe Biden',
            handle: '@JoeBiden',
            image: 'https://picsum.photos/200/200'
        }
    ])

</script>