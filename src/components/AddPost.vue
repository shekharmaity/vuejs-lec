<template>
    <div>
        <h2>Add Post</h2>
        <form @submit.prevent="addPost">
            <pre>
                Title : <input type="text" name="" id="" v-model="formData.title">
                Body : <input type="text" v-model="formData.body">
                UserId : <input type="text" name="" id="" v-model="formData.userId">

                <button>Save Post</button>
            </pre>
        </form>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AddPost",
    data() {
        return {
            formData: {
                title: "",
                body: "",
                userId: 0,
            }
        }
    },
    methods: {

        addPost() {
            let url = "https://jsonplaceholder.typicode.com/posts";

            let payload = {
                body: this.formData,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            };

            axios.post(url, payload)
                .then(resp => {
                    console.log(resp)
                })
                .catch(err => {
                    console.error(err);
                });
        }

    }
}





</script>

<style lang="scss" scoped></style>