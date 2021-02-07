<template>
  <div class="wrapper">
    <label>
      <input
          type="text"
          placeholder="请输入备注"
          v-model="value"
          @input="overLength"
      />
      <span class="msg">{{ value.length }} / 10</span>
    </label>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop() value!: string;

  overLength() {
    this.value = this.value.substring(0, 10);
    this.$emit("update:value", this.value);
  }

}
</script>

<style scoped lang="scss">
.wrapper {
  font-size: 14px;
  padding: 8px 0;
  background: #f5f5f5;

  > label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;

    > input {
      flex-grow: 1;
      height: 40px;
      background: transparent;
      border: none;
    }

    > span {
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>