<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="wrapper">
      <div class="box">
        <div class="title">
          Super Fancy item
        </div>
        <CTA />
      </div>
      <div class="box">
        <div class="title">
          Super Fancy item
        </div>
        <CTAGhost />
      </div>
    </div>
  </div>
</template>

<script>
import CTA from './CTA';
import CTAGhost from './CTAGhost';

export default {
  name: 'MixinWrapper',
  components: {
    CTA,
    CTAGhost,
  },
  data() {
    return {
      msg: 'Welcome to Vue Composing Components with Mixins',
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: normal;
}

.wrapper > div {
  margin: 0 auto 40px;
  max-width: 200px;
}

.box {
    border: 1px solid #64B587;
    padding: 20px;
}

.title {
  margin-bottom: 10px;
}
</style>
