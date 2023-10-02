<template>
  <div style="text-align: center;">
    <h2>App Page</h2>
    <input type="text" name="firtName" id="firstName" v-model="firstName">

    <top-nav :firstName="firstName" :lastName="true"></top-nav>
   
  </div>
</template>
<script>

import TopNav from './components/TopNav.vue'  // step 1 import
export default {
  components: { TopNav },   //step 2 declare component
  name: 'App',
  data(){
    return{
      firstName:"",
    }
  }
}
</script>

