<template>
  <div>
    <h2>Vue Labs</h2>
    <p>{{ fullName }}</p>
    <p>{{ getFullName() }}</p>

    <input type="text" name="language" id="language" v-model="language">
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      language:"",
      firstName: "Shekhar",
      lastName: "Maity"
    }
  },
  methods: {
    getFullName() {
      console.log("getFUllNName");
      return this.firstName + " " + this.lastName;
    }
  },
  computed: {
    fullName() {
      console.log("fullName");
      return this.firstName + " " + this.lastName;
    }
  }
}
</script>