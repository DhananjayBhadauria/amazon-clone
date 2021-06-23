<template>
<Nav />
<div class="">
 <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <div style="margin-top:50px">
     <router-view/>
  </div>
 
</div>
 
</template>

<script>
import Nav from './views/Nav.vue'
export default {
  name:'App',
  components:{Nav}
}
</script>


