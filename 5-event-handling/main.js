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
        variantImage: './assets/vmSocks-green.jpg',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.jpg',
      }
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart++
    },
    removeToCart() {
      this.cart > 0 && this.cart--
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})