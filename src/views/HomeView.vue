<script>
    import Blogs from '../components/Blogs/Blogs.vue'
    import SearchInput from '@/components/SearchInput.vue';
    import { blogsData } from '@/data/blogs'

    export default {
        data() {
            return {
                blogsData
            }
        },
        components: {
            Blogs, 
            SearchInput
        },
    }
</script>

<template>
    <main class="container px-4 mt-10">
        <SearchInput/>
        <Blogs :blogsData="blogsData"/>
    </main>
</template>
