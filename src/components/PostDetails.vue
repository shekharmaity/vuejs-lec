<template>
    <div>
        <button @click="getPosts">Fetch All Post</button>
        <div v-for="post in postList" :key="post.id">
            <p>{{ post.id }}. {{ post.title }} :: {{ post.body }}</p>

        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "UserDetails",
    data() {
        return {
            postList: [],
        }
    },
    methods: {
        getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    console.log(response);
                    this.postList = response.data;
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>