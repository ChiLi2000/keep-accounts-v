<template>
  <div :class="classPrefix && `${classPrefix}-wrapper`">
    <ul class="tabs">
      <li>支出</li>
      <li class="selected">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class Tab extends Vue {
  @Prop(String) classPrefix?: string;
}
</script>

<style scoped lang="scss">

.tabs {
  display: flex;
  justify-content: space-between;
  text-align: center;

  li {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
}
</style>