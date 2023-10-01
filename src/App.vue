<template>
  <div>
    <h2>Vue Labs</h2>
    <p>firstname : {{ firstName }}</p>
    <p>lastname : {{ lastName }}</p>
    <p>fullName : {{ fullName }}</p>
    <input type="text" name="language" id="language" v-model.lazy="fullName">
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      language: "",
      firstName: "Shekhar",
      lastName: "Maity",
    }
  },
  methods: {
    getFullName() {
      console.log("getFUllNName");
      return this.firstName + " " + this.lastName;
    }
  },
  computed: {
    // fullName() {  //cache
    //   console.log("fullName");
    //   return this.firstName + " " + this.lastName;
    // }


    fullName: {  //cache
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(value) {
        //object BL
        const name = value.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
      }
    }
    // advantages.
    // cache data.
    // less time and computed
    // big object BL

    // array Object - 200
    // object - 30 field 

    // product name, product category, product price.

    // productField(){
    //   var[] product;
    //   for(){

    //     productName = obj(i).productName;
    //     productCategory = obj[i].productCategory;
    //     productPrice = obj[i].productPrice;

    //     product.push();

    //     return product;
    //   }

    // }


  }
}
</script>