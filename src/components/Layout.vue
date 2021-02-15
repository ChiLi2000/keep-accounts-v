<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <DateSection class-prefix="date"
                 :value.sync="valueTime"
                 :placeholder="valueTime"
                 type="month" format="yyyy-MM"/>
    <Tab class-prefix="tab"
         :slotSpan="slotSpan"
         :value.sync="typeValue"
         :mouthTotal="mouthTotal"/>
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import Tab from "@/components/Account/Tab.vue";
import DateSection from "@/components/Account/DateSection.vue";

@Component({
  components: {Nav, DateSection, Tab}
})
export default class Layout extends Vue {
  @Prop(Boolean) slotSpan!: boolean;
  @Prop(String) classPrefix?: string;
  @Prop() mouthTotal!: ((type: Category) => number);

  @Prop() valueTime!: string;
  typeValue = "-" as Category;


  @Watch("valueTime")
  onValue() {
    this.$emit("update:valueTime", this.valueTime);
  }
}


</script>

<style scoped lang="scss">
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    overflow: auto;
    flex-grow: 1;
  }
}

.date-wrapper {
  background: white;
  padding: 12px 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  ::v-deep .el-date-editor.el-input {
    width: 100px;
  }
}

::v-deep.tab-wrapper {
  background: white;

  li {
    padding: 6px 0;
    margin: 0 14px;
    display: flex;
    flex-direction: column;


    span {
      padding: 16px 0 0;
      font-size: 28px;
      font-weight: 600;
    }
  }
}
</style>