<script>
    export default {
        data() {
            return {
                blog: {}
            }
        },
        mounted() {
            fetch(`http://localhost:3000/posts/${this.$route.params.blogId}`)
            .then(res => res.json())
            .then(res => {
                this.blog = res
            })
        }
    }


</script>


<template>
    <main class="my-5" >
        <div class="w-full h-[300px]">
            <img v-bind:src="blog.image" v-bind:alt="blog.title" class="w-full h-full object-contain">
        </div>
       <section class="container px-4">
            <div class="md:p-10">
                <div class="mb-10">
                    <h1 class="text-center text-5xl text-gray-700 font-bold">{{ blog.title }}</h1>
                    <p class="text-lg font-semibold uppercase mb-2 text-center mt-5">
                        {{ blog.category?.charAt(0) }}<span class="lowercase">{{ blog.category?.slice(1) }}</span> &middot; 
                        <span class="text-base font-medium">{{ new Date(blog.date).toLocaleDateString() }}</span>
                    </p>
                </div>
                <p class="text-lg text-gray-700 leading-[1.7]">{{ blog.content }}</p>
                <p class="text-lg text-gray-700 font-semibold mt-5">
                    {{ blog.author }}
                </p>
            </div>
       </section>
    </main>
</template>
