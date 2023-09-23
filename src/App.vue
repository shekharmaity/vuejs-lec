<template>
  <div>
    <p>Hello {{ firstName }}.</p>
    <h2 v-text="firstName"></h2>
    <h2 v-html="htmlSyntaxCode"></h2>

    <!-- v-bind -->

    <p v-bind:id="paraId">Vue Js Practice</p>

    <p v-bind:disabled="isDisabled">Vue Js Practice</p>

    <!-- conditional -->
    <p :class="true && classCss">Class test</p>

    <p :class="[classCss, two]">Array css</p>

    <p v-bind:class="{
      classCss
    }">Object css</p>


<p :style="sty">external css</p>

  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  data() {
    return {
      firstName: "Shekhar",
      header: "heading",
      htmlSyntaxCode: "<b>Bold data</b>",
      paraId: "para",
      isDisabled: true,
      classCss: "test",
      two: "two",
      sty:{
        color: "blue",
        padding: "20PX",
      }
    }
  },
  // components: {
  //   HelloWorld
  // }
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

#para {
  color: blue;
}

.test {
  background-color: blanchedalmond;
}

.two {
  color: blue;
}
</style>
