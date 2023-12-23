<template lang="">
    <header class='container flex-between py-3 px-4'>
        <h1 class='text-3xl text-[#181818] font-bold'>VueBlog</h1>
        <div class='flexx space-x-5'>
            <router-link to="/" class='header-link'>
                Home
            </router-link>
            <router-link to="/blogs" class='header-link'>
                Blogs
            </router-link>
            <router-link to="/create-blog" class='header-link'>
                Create Blog
            </router-link>
        </div>
    </header>  
</template>


<script>
    // import { RouterLink } from 'vue-router';
    export default {
        components: {
            // RouterLink
        }
    }
</script>


