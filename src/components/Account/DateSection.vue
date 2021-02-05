<template>
  <div :class="classPrefix && `${classPrefix}-wrapper`">
    <el-date-picker
        v-model="value1"
        type="date"
        :placeholder="placeholder">
    </el-date-picker>
  </div>
</template>

<script lang="ts">
import {Vue, Component,Prop} from "vue-property-decorator";

@Component
export default class Date extends Vue {
  @Prop(String) classPrefix?: string
  @Prop() placeholder?: string;
}
</script>

<style scoped lang="scss">

::v-deep .el-date-editor.el-input {
  width: 80px;

  input.el-input__inner {
    padding: 0 0 0 30px;
    border-radius: 25px;
  }
}

::v-deep .el-icon-circle-close {
  visibility: hidden;
  transition: all 0s;
}
</style>