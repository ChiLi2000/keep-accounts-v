<template>
  <div>
    <el-date-picker
        v-model="value1"
        type="date"
        placeholder="01-31">
    </el-date-picker>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component
export default class Date extends Vue {
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