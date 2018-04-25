<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="wrapper">
      <Box>
        <CTA />
      </Box>
      <Box>
        <CTAGhost />
      </Box>
    </div>
  </div>
</template>

<script>
import Box from './Box';
import CTA from './CTA';
import CTAGhost from './CTAGhost';

export default {
  name: 'MixinSlotWrapper',
  components: {
    Box,
    CTA,
    CTAGhost,
  },
  data() {
    return {
      msg: 'Welcome to Vue Composing Components with Mixins and Slots',
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
</style>
