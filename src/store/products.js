const products = {
   state: {
      products:[
         {'id':1, 'name':'Earphone','image':'1.jpg','price':399, 'quantity':1},
         {'id':2, 'name':'Power Bank','image':'2.jpg','price':599, 'quantity':1},
         {'id':3, 'name':'Trolley Bag','image':'3.jpg','price':3399, 'quantity':1},
         {'id':4, 'name':'Mobile','image':'4.jpg','price':11399, 'quantity':1},
         {'id':5, 'name':'Laptop','image':'5.jpg','price':111399, 'quantity':1},
         {'id':6, 'name':'Smart Watch','image':'6.jpg','price':999, 'quantity':1},
         {'id':7, 'name':'Analog Watch','image':'7.jpg','price':799, 'quantity':1},
         {'id':8, 'name':'Adidas Shoes','image':'8.jpg','price':999, 'quantity':1},
         {'id':9, 'name':'Printer','image':'9.jpg','price':2199, 'quantity':1},
      ]
   },
  getters:{
     getAllProducts: (state) =>{ return state.products}
    
  },
  mutations: {
  },
  actions: {
  },
}

export default products;