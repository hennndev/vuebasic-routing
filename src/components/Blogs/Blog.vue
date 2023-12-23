<script>
    export default {
        props: {
            data: {
                id: Number,
                title: String,
                author: String,
                image: String,
                content: String,
                date: Date
            }
        }
    }
</script>

<template>
    <div class='shadow-md h-[440px] rounded-md hover:transform hover:-translate-y-[10px] duration-300 overflow-hidden'>
        <div class='h-[250px] w-full rounded-md'>
            <img v-bind:src="data.image" v-bind:alt="data.title" class='w-full h-full object-cover'>
        </div>
        <div class='p-3'>
            <div class='flex-between'>
                <p class='text-sm text-gray-500'>{{data.author}}</p>
                <p class='text-sm text-gray-500'>{{new Date(data.date).toLocaleDateString()}}</p>
            </div>
            <h1 class='text-gray-600 text-xl font-bold line-clamp-2'>{{data.title}}</h1>
            <h1 class='text-[15px] mt-1 text-gray-500'>
                <span class='line-clamp-3'>{{data.content}}</span> 
                <router-link :to="{name: 'blogDetail', params: {blogId: data.id}}">
                    <span class='text-blue-500 font-medium cursor-pointer hover:underline text-sm'>Read more...</span>
                </router-link>
            </h1>
        </div>
    </div>
</template>
