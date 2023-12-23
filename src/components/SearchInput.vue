
<script>
    export default {
        data() {
            return {
                searchTerm: '',
            }
        },
        methods: {
            handleChange(e) {
                this.searchTerm = e.target.value
            },
            handleSearch() {
                let queries = {
                    ...this.$route.query,
                    q: this.searchTerm
                }
                if(this.searchTerm === '') {
                    delete queries.q
                }
                if(this.searchTerm) {
                    this.$router.push({
                        path: '/blogs',
                        query: queries
                    })
                } else {
                    this.$router.push({
                        path: '/blogs',
                        query: queries
                    })
                }
            }
        },
    }
</script>

<template lang="">
    <!-- <p>{{status}}</p> -->
    <div class="flex-center mb-10">
        <input v-model.lazy="searchTerm" @change="handleChange($event)" type="text" class="border border-[#ccc] rounded-md px-3 py-2 w-[300px] mr-3 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Search blog...">
        <button class="px-6 py-2 border-none outline-none bg-blue-700 text-white rounded-md" @click="handleSearch">Search</button>
    </div>
</template>