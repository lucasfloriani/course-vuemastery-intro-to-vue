var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green.jpg',
    inventory: 100,
    details: [
      '80% cotton',
      '20% polyester',
      'Gender-neutral',
    ],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
      }
    ],
    sizes: [38, 39, 40, 41, 42]
  }
})