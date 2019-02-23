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
        <button @click="removeFromCart">
          Remove from cart
        </button>
      </div>

      <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet</p>
        <ul>
          <li v-for="review in reviews">
            <p>{{ review.name }}</p>
            <p>Rating: {{ review.rating }}</p>
            <p>{{ review.review }}</p>
            <p>Recommended: {{ review.recommended }}</p>
          </li>          
        </ul>
      </div>

      <product-review @review-submitted="addReview"></product-review>
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
      reviews: [],
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
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
    addReview(productReview) {
      this.reviews.push(productReview)
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

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <label>
        <input type="radio" name="recommended" value="yes" v-model="recommended">
        Yes
        </label>
        <label>
          <input type="radio" name="recommended" value="no" v-model="recommended">
          No
        </label>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    

    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      recommended: null,
      errors: [],
    }
  },
  methods: {
    onSubmit() {
      this.errors = []
      if (this.name && this.review && this.rating && this.recommended) {
        const productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommended: this.recommended,
        }
        this.name = null
        this.review = null
        this.rating = null
        this.recommended = null
        this.$emit('review-submitted', productReview)
      } else {
        if (!this.name) this.errors.push('Name required.')
        if (!this.review) this.errors.push('Review required.')
        if (!this.rating) this.errors.push('Rating required.')
        if (!this.recommended) this.errors.push('Recommended required.')
      }
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    cart: [],
    premium: true,
  },
  methods: {
    removeFromCart(id) {
      this.cart = this.cart.filter(item => item !== id)
    },
    updateCart(id) {
      this.cart.push(id)
    }
  }
})