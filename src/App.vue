<template>
  <div>
    <button @click="popUpFlag = true">Show Popup</button>
    <pop-up v-show="popUpFlag" @close="closePopUp"></pop-up>
    <p>UserName is : {{ userName }}</p>

  </div>
</template>

<script>
import PopUp from './components/PopUp.vue'


export default {
  components: { PopUp },
  name: 'App',

  data() {
    return {
      popUpFlag: false,
      userName:"",
    }
  },
  methods: {
    closePopUp(userName) {
      console.log(userName);
      this.userName= userName;
      this.popUpFlag = false;
    }
  }

}
</script>

