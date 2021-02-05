<template>
  <div :class="classPrefix && `${classPrefix}-wrapper`">
    <ul class="tabs">
      <li v-for="item in typeList"
          :key="item.value"
          @click="select(item)"
          :class="{selected:item.value ===value}"
      >{{ item.text }}
        <span v-if="slotSpan">￥100</span>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import typeList from "@/constants/typeList";

type DataSourceItem = { text: string; value: string };

@Component
export default class Tab extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  @Prop(Boolean) slotSpan!: boolean;
  typeList = typeList;

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + "-item"]: this.classPrefix,
      selected: item.value === this.value
    };
  }

  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
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