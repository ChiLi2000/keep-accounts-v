<template>
  <div class="topbar">
    <Icon name="left" @click.native="goBack"/>
    <span>记账</span>
    <Icon/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component
export default class Topbar extends Vue {
  goBack() {
    this.$router.back();
  }
}
</script>

<style scoped lang="scss">
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 12px 14px;

  .icon {
    width: 28px;
    height: 28px;
  }
}
</style>