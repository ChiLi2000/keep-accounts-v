<template>
  <nav>
    <router-link to="/detail" class="item" active-class="selected">
      明细
    </router-link>
    <router-link to="/account" class="item" active-class="selected">
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav"
};
</script>

<style scoped lang="scss">
</style>