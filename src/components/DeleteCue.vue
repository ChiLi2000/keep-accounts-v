<template>
  <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false">
    <slot/>
    <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="ok">删除</el-button>
  </span>
  </el-dialog>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class DeleteCue extends Vue {
  @Prop() dialogVisible!: boolean;

  cancel() {
    this.$emit("update:dialogVisible", false);
  }

  ok() {
    this.$emit("submit");
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-dialog {
  top: 20%;
  width: 90%;

  .el-dialog__header {
    padding: 0;
  }

  .el-dialog__body {
    text-align: center;
    color: #000000D9;
  }
}
</style>