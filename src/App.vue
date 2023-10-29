<template>
  <div style="text-align: center;">
    <h2>Hello World</h2>

    <button @click="isChild = false">hide child</button>
    <child v-if="isChild"></child>

    <input type="text" name="" id="" v-model="location">
    <br><br>
    Location: {{ location }}

  </div>
</template>

<script>
import Child from './components/Child.vue';
export default {
  components: { Child },
  name: 'App',

  data() {
    return {
      isChild: true,
      location: "",
    }
  },

  beforeCreate() {
    console.log("parent before created");
  },

  created() {
    console.log("parent created");
  },

  beforeUpdate() {
    console.log("parent before update");
  },

  updated() {
    console.log("parent update");
  },

  beforeMount() {
    console.log("parent before Mount");
  },

  mounted() {
    console.log("parent Mounted");
  },

  beforeUnmount() {
    console.log("parent before Unmount");
  },

  unmounted() {
    console.log("parent unmounted");
  }



}
</script>

