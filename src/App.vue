<template>
  <div>
    <h2>Vue lab</h2>

    <label for="fullName">FullName : </label>
    <p>{{ firstName }} - {{ lastName }}</p>
    <p>{{ firstName }} - {{ lastName }}</p>
    <p>{{ firstName }} - {{ lastName }}</p>
    <p>{{ firstName }} - {{ lastName }}</p>
    <p>{{ firstName }} - {{ lastName }}</p>



    Method {{ fullName() }}



    <br>

    Computed {{ name }}

    <br>
    <input type="text" name="subject" id="subject" v-model="subject">

    {{ subject }}

    <br>
    <br>
    <input type="text" name="subject" id="subject" v-model="firstName">
  </div>
</template>

<script>


export default {
  name: 'App',


  data() {
    return {
      firstName: "Shekhar",
      lastName: "Maity",
      subject: "",
    }
  },

  methods: {

    fullName() {
      console.log("fullName method called");
      return this.firstName + "-" + this.lastName;
    }
  },

  computed: {
    name() {
      //Busness logic
      console.log("name computed called");
      return this.firstName + "-" + this.lastName;
    }
  }

}
</script>
