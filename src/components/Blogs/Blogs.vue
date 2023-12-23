<script>
    import Blog from './Blog.vue'

    export default {
        props: ['blogsData'],
        components: {
            Blog
        }
    }
</script>


<template>
    <section class="grid grid-cols-cards gap-10">
        <template v-for="blog of blogsData" :key="blog.id">
            <Blog :data="blog"/>
        </template>
    </section>
</template>
