<script>
    import Blogs from '../components/Blogs/Blogs.vue'
    import SearchInput from '@/components/SearchInput.vue';

    export default {
        data() {
            return {
                blogsData: []
            }
        },
        created(){
            this.getBlogs()
        },
        methods: {
            getBlogs() {
                fetch('http://localhost:3000/posts')
                    .then(res => res.json())
                    .then(res => {
                        this.blogsData = res
                    })
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
