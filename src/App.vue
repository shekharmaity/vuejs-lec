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

    <br><br>
    <login-form :firstName="firstName" :lastName="formData.lastName"></login-form>

  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';

export default {
  components: { LoginForm },
  name: 'App',

  data() {
    return {
      firstName: "Shekhar",
      lastName: "Maity",
      subject: "",
      formData: {
        firstName: "Shekhar",
        lastName: "Maity"
      }
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
