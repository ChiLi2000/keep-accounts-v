<template>
  <ul class="tabs">
    <li>支出</li>
    <li class="selected">收入</li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "Tab"
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.tabs {
  display: flex;
  justify-content: space-between;
  text-align: center;

  li {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 4px 16px;
    margin: 0 14px;
    background: #f2f2f2;

    &.selected {
      color: $color;
      border: 1px solid $color;
    }
  }
}
</style>