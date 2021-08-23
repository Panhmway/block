<template>
<div class="container">
  <div class="row">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
          <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <h4 class="fs-3">Block</h4>
              <div class="navbar-nav ms-auto m-1">
                  <h5 class="me-2"><router-link :to="{name:'Home'}">Home</router-link></h5>
                  <h5> <router-link :to="{name:'Create'}">Create</router-link></h5>
              </div>
              </div>
          </div>
        </nav>
     </header>
  </div>
</div>
 
</template>

<script>
export default {

}
</script>

<style>

</style>