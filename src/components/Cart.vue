<template>
  <div class="container-fluid">
    <h2>Cart Page</h2>
    <div v-if="getCart.products.length > 0">
      <div class="row">
        <div class="col-md-9">
          <div
            v-for="prod in getCart.products"
            :key="prod.id"
            class="cart-item"
          >
            <div class="row">
              <div class="col-md-3">
                <img
                  :src="require(`../assets/images/${prod.image}`)"
                  alt="product-image"
                  class="product-cart-image"
                />
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col">{{ prod.name }}</div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="quantity"> Quantiy </label>
                    <select name="" id="quantity" v-model="prod.quantity" @change="updateQty($event, prod.id)">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                  </div>
                  <div class="col">
                    <div class="text-info" @click="removeItem(prod.id)">Remove</div>
                  </div>
                </div>
              </div>

              <!-- third column of cart products -->
              <div class="col-md-3">
                <div>Rs.{{ prod.price * prod.quantity}}</div>
              </div>
            </div>






          </div>
          <div class="row">
  <div class="col-md-3"></div>
  <div class="col-md-6" style="text-align:right;font-weight:bold">Total Price:</div>
<div class="col-md-3"> Rs. {{totalPrice}}</div>
</div>
        </div>

        <!-- Second column starts for the cart page right side -->
        <div class="col-md-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
          ipsam. Accusantium fugit cupiditate, quibusdam distinctio repudiandae
          placeat alias aspernatur excepturi, corrupti esse dignissimos quaerat
          nulla? Corrupti, officia numquam? Nam, obcaecati!
        </div>
      </div>
    </div>
    <div v-else class="empty-cart">
      <h2>Your Cart is empty!</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  data(){
return {'totalPrice':   0}
  },
  methods:{
     ...mapActions(['updateQuantities','removeCartItem']),
     updateQty(e, id){
        this.updateQuantities({'quantity':e.target.value, "id":id}) 
        const cart_summary = this.getCart
       console.log(cart_summary.products[0].name)
      this.totalPrice = 0
      let index = 0
       while(index < cart_summary.products.length){
         this.totalPrice += cart_summary.products[index].price * parseInt(cart_summary.products[index].quantity)
         index += 1;
       }
     },
     removeItem(id){
       this.removeCartItem(id)
     }
  }
  ,
  computed: {
    ...mapGetters(["getCart"]),

  },mounted() {
    const cart_summary = this.getCart
     this.totalPrice = 0
      let index = 0
       while(index < cart_summary.products.length){
         
         this.totalPrice += cart_summary.products[index].price * parseInt(cart_summary.products[index].quantity)
         index += 1;
       }
          
  },
};
</script>
<style scoped>
.empty-cart {
  background-color: #e2971c;
  padding: 20px;
  text-align: center;
  box-shadow: 2px 2px 15px #e2971c;
}
.cart-item {
  border-bottom: 1px solid lightgray;
  padding: 5px 5px 15px;
}
.product-cart-image {
  height: 75px;
  text-align: center;
  justify-content: center;
}
</style>