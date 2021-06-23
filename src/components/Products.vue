<template>
<div>
 
  <div class="container-fluid allrowp">
     <h1>This is products page.</h1>
    <div class="row">
      <div class="col-md-3" v-for="prod in getAllProducts" :key="prod.id">
        <div class="card shadow m-2 " >
  <img class="card-img-top img-fluid prod-img" :src="require(`../assets/images/${prod.image}`)" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">
      <span style="font-size:17px; font-weight:20px; color:#c45500">{{prod.name}} </span>
      <span style="font-size:14px"> Rs.{{prod.price}}</span>

      <button class="adtb btn btn-sm" @click="addToCart(prod)"><i class="fas fa-cart-plus"></i></button>
      

    </p>
  </div>
</div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Products',
  methods:{
...mapActions(['addToCart'])
  },
  computed:{
    ...mapGetters(['getAllProducts'])
  }

}
</script>

<style scoped>
.allrowp{
  margin-top: -251px;
}
.prod-img{
  height: 400px;
  padding: 10px 25px;
}
.adtb{
  float: right;
  background-color: #c45500;
  color: white;
  font-size: 20px;
  padding: 1px 12px;
}
</style>