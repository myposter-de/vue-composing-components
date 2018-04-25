<template>
  <div class="box">
    <div class="title">
      Super Fancy item
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Box',
};
</script>

<style scoped>
.box {
    border: 1px solid #64B587;
    padding: 20px;
}

.title {
  margin-bottom: 10px;
}
</style>
