<script>
    export default {
        computed: {
            getCurrentCategory() {
                return this.$route.query.category 
            }
        },
        methods: {
            chooseCategory(category) {
                let queries = {
                    ...this.$route.query,
                    category: category
                }
                if(category === '') {
                    delete queries.category
                }
                this.$router.push({
                    path: this.$route.path,
                    query: queries
                })
            }
        }
        
    }
</script>


<template>
    <div class='flex-center flex-wrap mb-10'>
        <div :class="[!getCurrentCategory && 'bg-gray-800 text-white', 'category']" @click="chooseCategory('')">
            <p>All Category</p>
        </div>
        <div :class="[getCurrentCategory === 'programming' && 'bg-gray-800 text-white', 'category']" @click="chooseCategory('programming')">
            <p>Programming</p>
        </div>
        <div :class="[getCurrentCategory === 'design' && 'bg-gray-800 text-white', 'category']" @click="chooseCategory('design')">
            <p>Design</p>
        </div>
        <div :class="[getCurrentCategory === 'ghaib' && 'bg-gray-800 text-white', 'category']" @click="chooseCategory('ghaib')">
            <p>Ghaib</p>
        </div>
    </div>
</template>
