<template>
  <div class="wrapper">
    <div class="output">10</div>
    <div class="pad">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberPad"
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.wrapper {
  background: #f5f5f5;

  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monaspace, serif;
    padding: 8px 14px;
    text-align: right;
    height: 60px;
  }

  .pad {
    @extend %clearFix;
    margin: 4px 14px;

    button {
      width: 25%;
      height: 56px;
      float: left;
      background: transparent;
      border: none;
      border-radius: 4px;

      &.ok {
        height: 56 * 2px;
        float: right;
      }

      &.zero {
        width: 25 * 2%;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4 * 2%);
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 4 * 3%);
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4 * 4%);
      }

      &:nth-child(14) {
        background: darken($bg, 4 * 5%);
      }

      &:nth-child(12) {
        background: darken($bg, 4 * 6%);
      }
    }
  }
}
</style>