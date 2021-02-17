<template>
  <nav>
    <router-link to="/detail" class="item" active-class="selected">
      <Icon name="detail"></Icon>
      明细
    </router-link>
    <router-link to="/account" class="item" active-class="selected">
      <Icon name="account"></Icon>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"></Icon>
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
@import "~@/assets/style/helper.scss";

nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  padding: 6px 0;
  box-shadow: rgb(0 0 0 / 25%) 0 0 3px;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2px 0;
    width: 33.33333333%;

    svg {
      width: 32px;
      height: 32px;
    }

    &.selected {
      color: $color;

      svg {
        fill: $color;
      }
    }
  }
}
</style>