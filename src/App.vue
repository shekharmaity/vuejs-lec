<template>
  <div style="text-align: center;">

    <h2>Hello Vue axios</h2>

    <post-details></post-details>

    <post-form></post-form>
  </div>
</template>

<script>
import PostDetails from './components/PostDetails.vue'
import PostForm from './components/PostForm.vue'
export default {
  components: { PostDetails, PostForm },
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

