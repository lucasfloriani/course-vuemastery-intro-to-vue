Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
        <p
          v-else
          :class="{ emptyStock: !inStock }">
          Out of Stock
        </p>
        <p>{{onSaleMessage}}</p>
        <p>Shipping: {{shipping}}</p>

        <productDetails :details="details"></productDetails>

        <div
          v-for="(variant, index) in variants"
          :key="variant.variantId"
          class="color-box"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)">
        </div>

        <button
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }">
          Add to Cart
        </button>

        <div class="cart">
          <p>Cart({{cart}})</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
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
    }
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
    },
    shipping() {
      return this.premium ? 'Free' : 2.99
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

Vue.component('productDetails', {
  props: {
    details: {
      type: Array,
      required: true,
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{detail}}</li>
    </ul>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
  }
})