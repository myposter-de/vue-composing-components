<template>
  <div>
    <button
      :class="{'btn-cta--disabled': !isActive}"
      @click.prevent="addToCart()"
      class="btn btn-cta btn--full-width btn-cta--green"
    >
      Add to Cart
    </button>
  </div>
</template>

<script>
import ctaMixin from '../mixins/cta-mixin';

export default {
  name: 'CTA',
  mixins: [ctaMixin],
};
</script>

<style scoped>
.btn {
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;
}

.btn-cta {
  font-size: 16px;
  padding: 15px 32px;
}

.btn-cta--green {
  background-color: #64B587;
  border: none;
  color: white;
}

.btn-cta--disabled {
  background-color: #ddd;
}
</style>
