<template>
  <div class="layout-wrapper">
    <Date class-prefix="date" placeholder="2021-02"/>
    <Tab class-prefix="tab" :slotSpan="slotSpan"/>
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import Tab from "@/components/Account/Tab.vue";
import Date from "@/components/Account/Date.vue";

@Component({
  components: {Nav, Date, Tab}
})
export default class Layout extends Vue {
  @Prop(Boolean) slotSpan!: boolean;
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

    &.selected {
      border-bottom: 2px solid gray;
    }

    span {
      padding: 16px 0 0;
      font-size: 28px;
      font-weight: 600;
    }
  }
}
</style>