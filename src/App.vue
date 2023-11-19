<template>
  <div>
    <h2>Main Page</h2>

    <router-link to="/login">Login Page</router-link>
    
    <router-link to="/people">People</router-link>
  
    <router-link to="/user-details/1">User Details</router-link>

    <router-link to="/user-list">User List</router-link>

    <br>
    <br>
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

<style scoped>
a {
    display: inline-block;
    background-color: black;
    border: solid 1px black;
    color: white;
    padding: 5px;
    margin: 10px;
  }
  a:hover,
  a.router-link-active {
    background-color: rgb(110, 79, 13);
  }
  div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
  }
</style>

