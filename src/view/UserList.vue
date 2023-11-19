<template>
    <div>
        <div v-for="user in userData" :key="user.id">
            <p>{{ user.id }}. <router-link :to="{ name: 'userDetails', params: { id: user.id } }">{{ user.firstname }} - {{
                user.lastname }}</router-link></p>
            <button @click="moreInfo(user)">More info</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserList',
    data() {
        return {
            userData: {},
        }
    },
    created() {
        axios.get("https://jsonplaceholder.org/users").then(resp => {
            this.userData = resp.data;
            console.log(this.userData);
        })
    },
    methods: {
        moreInfo(user) {
            this.$router.push({ path: '/more-info', query: {
                firstName: user.firstname,
                lastName: user.lastname,
                company : user.company.name,
            } });

        }
    }

}
</script>

