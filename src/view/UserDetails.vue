<template>
    <div>
        <a @click="$router.back()">back</a>

        <p>{{ userData.id }} {{ userData.firstname }} - {{ userData.lastname }}</p>


        <p>Company Name : {{ userData.company.name}}</p>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'UserDetail',
    data() {
        return {
            userData: {},
        }
    },
    created() {
        const userId = this.$route.params.id;
        console.log("User id is : " + userId)
        axios.get("https://jsonplaceholder.org/users/" + userId).then(resp => {
            this.userData = resp.data;
            console.log(this.userData);
        })
    }
}
</script>
