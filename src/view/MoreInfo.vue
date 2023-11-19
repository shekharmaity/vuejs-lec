<template>
    <div>
        <a @click="$router.back()">back</a>
        <br>
        <br>

        Name : {{ firstName }} {{ lastName }}
        Company : {{ company }}

    </div>
</template>

<script>
export default {
    name: "MoreInfo",
    data() {
        return {
            firstName: '',
            lastName: '',
            company: '',
        }
    },
    created() {
        this.firstName = this.$route.query.firstName;
        this.lastName = this.$route.query.lastName;
        this.company = this.$route.query.company
    },
    back() {
        this.$router.back();
    }
}
</script>

