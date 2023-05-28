<template>
    <div class="flex flex-col">

        <!-- Preview Card : What's happening? -->
        <SidebarRightPreviewCard title="What's happening">

            <SidebarRightItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="font-bold test-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>
                    <p class="test-xs test-gray-400 dark:text-gray-300">{{ whatsHappening.count }}</p>
                </div>
            </SidebarRightItem>

        </SidebarRightPreviewCard>

        <!-- Preview Card : Who to follow? -->
        <SidebarRightPreviewCard title="Who to follow">

            <SidebarRightItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row justify-between p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" alt="img">
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