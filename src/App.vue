<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <DuplicatedWrapper /> -->
    <MixinWrapper />
    <!-- <MixinSlotWrapper /> -->
  </div>
</template>

<script>
import DuplicatedWrapper from './components/DuplicatedWrapper';
import MixinWrapper from './components_with_mixin/MixinWrapper';
import MixinSlotWrapper from './components_with_slots/MixinSlotWrapper';

export default {
  name: 'App',
  components: {
    DuplicatedWrapper,
    MixinWrapper,
    MixinSlotWrapper,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
