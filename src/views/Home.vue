<template>
  <div class="home">
<Banner />    
    <Products/>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue'
import Banner from '../views/Banner.vue'

export default {
  name: 'Home',
  components: {
    Products, Banner
  }
}
</script>
