<template>
  <div style="text-align: center;">
    Sound : {{ sound }}
    <button @click="sound++">increase sound</button>
    <button @click="sound--">decrease sound</button>

<br>
    <input type="text" name="productPrice" id="productPrice" v-model="product.productPrice">
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      sound: 11,
      product:{
        productName:"pillow",
        productPrice:"1000",
        productCategory:"homeproduct"
      }
    }
  },
  methods: {
    soundCheck() {
      this.sound++;
      if (this.sound == 11) {
        alert("sound is more")
      }
    }
  },
  watch: {
    // sound(newV,oldV){ // same name as data field
    //   console.log("watch sound");
    //   console.log("new value",newV);
    //   console.log("old value",oldV);
    //   if(oldV <= 11 && newV >=11 ){
    //     alert("sound is more")
    //   }
    // }

    // immediate watcher example
    // sound: {
    //   handler(newV, oldV) { // same name as data field
    //     console.log("watch sound");
    //     console.log("new value", newV);
    //     console.log("old value", oldV);
    //     if (newV >= 11) {
    //       alert("sound is more")
    //     }
    //   },
    //   immediate: true,
    // }

      // Deep watcher for object and array
      product:{
      handler(newV) { // same name as data field
        console.log("watch product");
        console.log("new value", newV);

        // BL
      },
      deep:true,
    }
    



    //start end
  }
}
</script>

