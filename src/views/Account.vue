<template>
  <div class="outer">
    <Topbar/>
    <div class="tab_date">
      <Tab class-prefix="tab"/>
      <Date/>
    </div>
    <div class="center">
      <TagsSection/>
    </div>
    <Notes/>
    <NumberPad/>
  </div>
</template>

<script lang="ts">

import {Vue, Component} from "vue-property-decorator";
import Topbar from "@/components/Account/Topbar.vue";
import Tab from "@/components/Account/Tab.vue";
import Date from "@/components/Account/Date.vue";
import TagsSection from "@/components/Account/TagsSection.vue";
import Notes from "@/components/Account/Notes.vue";
import NumberPad from "@/components/Account/NumberPad.vue";

@Component({
  components: {Topbar, Tab, Date, TagsSection, Notes, NumberPad}
})
export default class Account extends Vue {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.outer {
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .center{
    flex-grow: 1;
    overflow: auto;
  }
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