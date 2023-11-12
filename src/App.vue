<template>
  <div>
    <h2>Main Page</h2>

    <router-link to="/login">Login Page</router-link>
    <br>
    <router-link to="/people">People</router-link>



    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',

  data() {
    return {

    }
  }

}
</script>

