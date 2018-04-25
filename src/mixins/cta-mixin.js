import { add } from 'lodash';

export default {
  data() {
    return {
      isActive: true,
      counter: 0,
    };
  },
  methods: {
    addToCart() {
      if (this.isActive) {
        // add super fancy item to cart
      }
      this.isActive = !this.isActive;
      this.counter = add(this.counter, 1);
    },
  },
};
