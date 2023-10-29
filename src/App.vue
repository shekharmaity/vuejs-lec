<template>
  <div style="text-align: center;">
    <h2>Hello Vue axios</h2>
    <!-- <post-details></post-details>
    <post-form></post-form> -->

      <post-list-details></post-list-details>
      <add-post></add-post>

  </div>
</template>

<script>
import AddPost from './components/AddPost.vue'
import PostListDetails from './components/PostListDetails.vue'
// import PostDetails from './components/PostDetails.vue'
// import PostForm from './components/PostForm.vue'
export default {
  components: {
    PostListDetails,
    AddPost 
    // PostDetails, PostForm 
  
  },
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

