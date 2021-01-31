<template>
  <div class="wrapper">
    <Topbar/>
    <div class="tab_date">
      <Tab class-prefix="tab"/>
      <Date/>
    </div>
    <TagsSection/>
  </div>
</template>

<script lang="ts">

import {Vue, Component} from "vue-property-decorator";
import Topbar from "@/components/Account/Topbar.vue";
import Tab from "@/components/Account/Tab.vue";
import Date from "@/components/Account/Date.vue";
import TagsSection from "@/components/Account/TagsSection.vue";

@Component({
  components: {Topbar, Tab, Date, TagsSection}
})
export default class Account extends Vue {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.wrapper {
  background: white;
}

.tab_date {
  border-top: 1px solid #d3d3d3;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

::v-deep .tab-wrapper {
  width: 60%;

  li {
    margin-right: 32px;
    border-radius: 25px;
    text-align: center;
    padding: 4px 16px;
    background-color: #f2f2f2;

    &.selected {
      color: $color;
      border: 1px solid $color;
    }
  }
}

</style>