<template>
  <div class="container">
    <div class="row">
      <legend class="mt-4 m-auto fw-bolder fs-3 mb-4">Posts List</legend>
        <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post"> </SinglePost>
        </div>
    </div>
  </div>

</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
    components:{SinglePost},
    props:["posts"],
    setup(props){
        
    }
}
</script>

<style>

</style>