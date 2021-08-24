<template>
  <div class="home">
          <div v-if="error">
              {{error}}
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div v-if="posts.length>0">
                     <PostsList :posts="posts"></PostsList>
                </div>
                <div v-else>
                    <Spinner></Spinner>
                </div>
              </div>
              <div class="col-md-4">
                  <TagCloud></TagCloud>
                 <TagCloud :posts="posts"></TagCloud>
              </div>
            </div>
          </div> 
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList'
import getPosts from "../composables/getPosts"
export default {
  components: {
    TagCloud,
    Spinner, PostsList },
    setup(){
      // composable function
      let {posts,error,load}=getPosts()//{posts,error,load}
      
      load();
      return {posts,error};
    }
}
</script>
<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>