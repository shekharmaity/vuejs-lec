<template>
  <div style="text-align: center;">
    <h2>App Page {{ firstName }}</h2>
    <br>
    <component-a></component-a>

  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'

export default {
  components: { ComponentA },
  name: 'App',

  data() {
    return {
      firstName: "Shekhar Maity",
    }
  },

  provide() {
    return {
      firstName: this.firstName,
    }
  }


}
</script>

