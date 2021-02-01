<template>
  <Layout>
    <Date class-prefix="date" placeholder="2021-02"/>
    <Tab class-prefix="tab" childSpan="true"/>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Tab from "@/components/Account/Tab.vue";
import Date from "@/components/Account/Date.vue";

@Component({
  components: {Layout, Date, Tab}
})
export default class Detail extends Vue {

}
</script>

<style scoped lang="scss">
.date-wrapper{
  background: white;
  padding: 12px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
 ::v-deep .el-date-editor.el-input {
    width: 100px;
  }
}
::v-deep.tab-wrapper{
  background: white;
  li{
    padding: 6px 0;
    margin: 0 14px;
    display: flex;
    flex-direction: column;
    span{
      padding: 16px 0 0;
      font-size: 28px;
      font-weight: 600;
    }
  }
}
</style>