<template>
    <div>

        <form @submit.prevent="putPost">

            <label for="">UserId : </label>
            <input type="number" name="" id="" v-model="form.userId">

            <label for="">Title : </label><input type="text" name="" id="" v-model="form.title">

            <label for="">Body : </label><input type="text" name="" id="" v-model="form.body">

            <button>Save</button>

        </form>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "PostForm",
    data() {
        return {
            form: {
                userId: 0,
                title: "",
                body: "",
            }
        }
    },
    methods: {
        putPost() {
            var postPayload = {
                methods: 'POST',
                body: this.form,
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }
            axios.post("https://jsonplaceholder.typicode.com/posts", postPayload)
                .then(resp => {
                    console.log(resp);
                })
                .catch(err => {
                    console.log(err);
                })

        }
    }
}
</script>

<style lang="scss" scoped></style>