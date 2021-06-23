const cart = {
   state:{
      cartData :{   products:[],
         totalPrice: 0,
         quantities:0
   }
   
   },
   getters:{
      getCart : (state) => {
         return state.cartData
      }
   },
   mutations:{
addToCart: (state, payload) => {
  
const product = state.cartData.products.find(pro => pro.id === payload.id)
if(product){
   return state;
}else{
   payload.totalPrice = parseInt(payload.quantity)* payload.price
   console.log(payload)
   state.cartData.products.push(payload);
state.cartData.totalPrice = state.cartData.totalPrice + payload.price;
state.cartData.quantities = state.cartData.quantities + 1
   }
},
updateQuantities: (state, payload) =>{
   const product = state.cartData.products.find(prod => prod.id === payload.id)
   product.totalPrice = parseInt(product.quantity) * product.price
   const index = state.cartData.products.findIndex(product => product.id === payload.id)
   state.cartData.products[index] = product 
},
removeCartItem(state, id){
console.log('Removing Item', id)
const product = state.cartData.products.findIndex(prod => prod.id === id)
state.cartData.products.splice( product)
state.cartData.quantities = state.cartData.quantities - 1
}

},
   
   actions:{
      addToCart : (context, payload) => {
         context.commit('addToCart',payload)},
         updateQuantities:(context, payload) =>{
            context.commit('updateQuantities', payload)
         },
         removeCartItem:(context, id)=>{
            context.commit('removeCartItem', id)
         }

   }
}
export default cart;