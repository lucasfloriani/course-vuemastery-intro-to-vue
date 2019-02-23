var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    inventory: 0,
    onSale: false,
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
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.jpg',
        variantQuantity: 0,
      }
    ],
    cart: 0,
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSaleMessage() {
      return `${this.brand} ${this.product} ${this.onSale ? 'are on sale!' : 'are not on sale!'}`
    }
  },
  methods: {
    addToCart() {
      this.cart++
    },
    updateProduct(index) {
      this.selectedVariant = index
    }
  }
})