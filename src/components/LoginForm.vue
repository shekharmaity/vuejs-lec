<template>
    <div>
        <form action="">
            <div>
                <label for="">First Name : </label>
                <input type="text" name="name" id="" v-model="formData.firstName">
            </div>
            <div>
                <label for="lastName">Last Name : </label>
                <input type="text" name="lastName" id="" v-model="formData.lastName">
            </div>
            <button>Save</button>
        </form>

    </div>
</template>

<script>
export default {
    name: "loginForm",
    data() {
        return {
            formData: {
                firstName: "",
                lastName: "",
            },
        }
    },
    props: ['firstName', 'lastName'],

    created() {
        console.log("on mount");
        this.formData.firstName = this.firstName;
        this.formData.lastName = this.lastName;
    }


}
</script>