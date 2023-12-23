<script>
    import { useRoute } from 'vue-router'
    import { blogsData} from '@/data/blogs'
    import Blogs from '../components/Blogs/Blogs.vue'
    import SearchInput from '../components/SearchInput.vue'
    import Categories from '../components/Blogs/Categories.vue'

    export default {
        data() {
            return {
                blogsData: blogsData,
            }
        },
        computed: {
            filteredBlogsData: function() {
                return !this.$route.query?.q ? this.blogsData : this.blogsData.filter(data => {
                    return data.title.toLowerCase().includes(this.$route.query?.q?.toLowerCase()) ||
                    data.author.toLowerCase().includes(this.$route.query?.q?.toLowerCase()) ||
                    data.category.toLowerCase().includes(this.$route.query?.q?.toLowerCase())
                })
            },
            filterByCategory: function() {
                return this.filteredBlogsData.filter(data => {
                    if(this.$route.query.category) {
                        return data.category === this.$route.query.category
                    } else {
                        return data
                    }
                })
            }
        },
        components: {
            Blogs,
            SearchInput,
            Categories
        }
    }
</script>

<template>
    <main class="container px-4 mt-10 mb-10">
        <SearchInput/>
        <Categories/>
        <Blogs v-if="filterByCategory.length > 0" :blogsData="filterByCategory"/>
        <p v-else="filterByCategory.length < 1">Blogs not available</p>
    </main>
</template>
