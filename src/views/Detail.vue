<template>
  <div class="container">
    <div class="row">
      <legend class="fs-3 fw-bolder mt-5 mt-4 ms-5 text-primary text-center">Post Details</legend>
      <div class="col-md-3"></div>
      <div class="col-md-6">
         <div v-if="post" class="ms-5 mt-4">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
              <div v-for="tag in post.tags" :key="tag" class="pill">
          {{tag}}
        </div>
            <button class="btn btn-info float-end"><router-link :to="{name:'Home'}">Back</router-link></button>
          </div>
          <div v-else>
            <Spinner></Spinner>
          </div>
          </div>
      <div class="col-md-3"></div>
     
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
export default {
  components: { Spinner },
  props:["id"],
  setup(props){
    let {post,error,load}=getPost(props.id);//{post,error,load}
    load();
    return{post,error}
  }
}
</script>

<style>
</style>