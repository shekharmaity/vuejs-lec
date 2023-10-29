<template>
    <div>
        <h2>Post Details</h2>

        <button @click="getPost">Get Posts</button>

        <div v-for="post in postList" :key="post.id">
            <p>{{ post.id }} :: {{ post.title }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "PostDetails",

    data() {
        return {
            postList: []
        }
    },
    // created() {
    //     console.log("created function call");
    //     this.getPost();
    // },
    methods: {
        getPost() {
            console.log("get Post list");

            //fetch data from axios
            let url = 'https://jsonplaceholder.typicode.com/postsList';

            axios.get(url)
                .then(response => {

                    console.log(response);
                    // BL
                    if (response.status === 200) {
                        this.postList = response.data;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
}



</script>

<style lang="scss" scoped></style>