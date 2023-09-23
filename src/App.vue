<template>
  <div>
    <h2>Hello</h2>
    Number : <input type="number" name="" id="" v-model="num">
    <p v-if="num === 0">Value is zero</p>
    <p v-else-if="num > 0"> Number is positive</p>
    <p v-else-if="num < 0"> Number is negative</p>
    <p v-else> Not a number</p>
    <p v-if="isShow">Element is shows by v-if</p>
    <p v-show="isShow">Element is shows by v-show</p>


    <p v-for="(name, index) in names" :key="name">{{ index }} - {{ name }}</p>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      num: 2,
      isShow: true,
      names: ['ravi', 'ram', 'sam', 'tejas'],
      fullName: [
        { first: "ravi", lastname: "singh" },
        { first: "rahul", lastname: "sharma" },
        { first: "ravi", lastname: "singh" },
        { first: "ravi", lastname: "singh" }
      ],

      //  ravi singh
      //  rahul sharma
      order: {
        id: 1,
        price: 12000,
        items: [
          { id: 1, itemName: "mobile" },
          { id: 2, itemName: "trimmer" },
          { id: 3, itemName: "pillow" },
        ]
      }
      // items names
      // mobile
      // trimmer
      // pillow
    }
  },

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
