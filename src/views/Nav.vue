<template>
   <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
  <!-- Brand -->
  <router-link to="/">
   <a class="navbar-brand" href="#">
     <img src="../assets/images/amazon-logo.jpg" class="brand-logo">
  </a>
  </router-link>
 
 
  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Navbar links -->
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
       <a class="" href="#" style="position:relative"> 
         <router-link :to="{name:'Cart'}">
           <i class="fa fa-shopping-cart" aria-hidden="true" style="font-size:40px; color:#f78d05"></i>
 <span class="cartItems" style="font-size:18px"> {{getCart.quantities}} </span>
         </router-link>

        </a>
      </li>
    
    </ul>
  </div>
</nav>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   name:'Nav',
  computed:{
    ...mapGetters(['getCart'])
  }
}
</script>
<style scoped>
.brand-logo{
   max-height: 50px;
}
.bg-dark{
  background-color:#231f20 !important;
}
.nav-item{
  color: white;
  font-size: 25px;
}
.cartItems{
  position: absolute !important;
bottom: 13px; 
  right: 12px;
  color:white;
  width: fit-content;
}
.navbar{
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 999;
  max-height: 50px;
  
}

</style>