<template>
  <div :class="classPrefix && `${classPrefix}-wrapper`">
    <ul class="tabs">
      <li v-for="item in typeList"
          :key="item.value"
          @click="select(item)"
          :class="{selected:item.value ===value}"
      >{{ item.text }}
        <span v-if="slotSpan">￥{{ numberFilter(mouthTotal(item.value)) }}</span>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import {Component, Prop} from "vue-property-decorator";
import typeList from "@/constants/typeList";
import {mixins} from "vue-class-component";
import Common from "@/mixins/common";

type DataSourceItem = { text: string; value: string };

@Component
export default class Tab extends mixins(Common) {
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  @Prop(Boolean) slotSpan!: boolean;
  @Prop() mouthTotal!: ((type: Category) => number);

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