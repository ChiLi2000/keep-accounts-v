<template>
  <nav>
    <router-link to="/detail" class="item" active-class="selected">
      <svg>
        <use xlink:href="#detail"/>
      </svg>
      明细
    </router-link>
    <router-link to="/account" class="item" active-class="selected">
      <svg>
        <use xlink:href="#account"/>
      </svg>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <svg>
        <use xlink:href="#statistics"/>
      </svg>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
require("@/assets/icons/detail.svg");
require("@/assets/icons/account.svg");
require("@/assets/icons/statistics.svg");

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
      color: #e1c748;

      svg {
        fill: #e1c748;
      }
    }
  }
}
</style>