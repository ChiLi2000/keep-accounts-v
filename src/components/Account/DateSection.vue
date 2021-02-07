<template>
  <div :class="classPrefix && `${classPrefix}-wrapper`">
    <el-date-picker
        v-model="value"
        :type="type"
        :placeholder="placeholder"
        :format="format"
        :editable="false"
        >
    </el-date-picker>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import dayjs from "dayjs";

@Component
export default class DateSection extends Vue {
  @Prop(String) classPrefix?: string;
  @Prop() value!: string;
  @Prop() type!: string;
  @Prop() placeholder?: string;
  @Prop() format!: string;

  @Watch("value")
  onValue() {
    const exactTime = dayjs(new Date().toISOString()).format(" HH:mm:ss")
    this.$emit("update:value", dayjs(this.value).format("YYYY-MM-DD").concat(exactTime));
  }


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