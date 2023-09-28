<template>
  <div>
    <pre>
    {{ JSON.stringify(formData, null, 2) }}
    <h3>Form Example</h3>
  </pre>
    <form >
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model.trim.lazy="formData.name">
      </div>
      <br>
      {{ formData.name }}
      <div>
        <label for="age">Age</label>
        <input type="text" name="age" id="age" v-model.number="formData.age">
      </div>
      <br>
      <div>
        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" v-model="formData.description"></textarea>
      </div>
      <div>
        <label for="country">Country : </label>
        <select name="country" id="country" v-model="formData.country">
          <option :value="country" v-for="(country, index) in countrys" :key="index">{{ country }}</option>
        </select>
      </div>
      <div>
        <label for="countrys">
          <select name="countrys" id="countrys" multiple v-model="formData.countrys">
            <option :value="country" v-for="(country, index) in countrys" :key="index">{{ country }}</option>
          </select>
        </label>
      </div>

      <br>

      <button  @click.prevent="submitForm(), printMethod()">Save</button>
    </form>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      countrys: ['india', 'usa', 'russia', 'japan'],
      formData: {
        name: "",
        description: "",
        age: "",
        country: "",
        countrys: [],
        citys: {},
      },
    }
  },
  methods: {
    // multiple methods

    //v-on @
    // @click
    // @su
    printMethod(){
      console.log("method is print");
    },
    submitForm() {
      this.printMethod(); 
      console.log(this.formData);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
