<template>
   <div class="banner">
      <h1>Banner</h1>
      
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   
   name:'Banner',

  
}
</script>

<style scoped>

.banner{
   background-image: url('../assets/images/banner.jpg');
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   width: 100%;
   height: 500px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
}
</style>