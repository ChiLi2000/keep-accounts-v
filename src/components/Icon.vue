<template>
  <svg class="icon">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script lang="ts">
require("@/assets/icons/detail.svg");
require("@/assets/icons/account.svg");
require("@/assets/icons/statistics.svg");

export default {
  name: "Icon",
  props: ["name"]
};
</script>

<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>