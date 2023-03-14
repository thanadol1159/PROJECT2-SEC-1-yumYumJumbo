<template>
    <div>
      <h2>สินค้าแนะนำ</h2>
      <ul>
        <li v-for="product in recommendedProducts" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>THB {{ product.price }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductRecommend',
    props: {
      recommendedProducts: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  