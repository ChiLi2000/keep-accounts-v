<template>
  <div class="outer">
    {{ record.category }}
    <hr/>
    {{ record.createdAt }}
    <hr/>
    {{ record.tagId }}
    <hr/>
    {{ record.note }}
    <hr/>
    {{ record.amount }}
    <Topbar/>
    <div class="tab_date">
      <Tab class-prefix="tab" :value.sync="record.category"/>
      <DateSection :value.sync="record.createdAt" :placeholder="placeholder" type="date" format="MM-dd"/>
    </div>
    <div class="center">
      <TagsSection :selectedTagId.sync="record.tagId" :type.sync="record.category"/>
    </div>
    <Notes :value.sync="record.note"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </div>
</template>

<script lang="ts">

import {Vue, Component} from "vue-property-decorator";
import Topbar from "@/components/Account/Topbar.vue";
import Tab from "@/components/Account/Tab.vue";
import DateSection from "@/components/Account/DateSection.vue";
import TagsSection from "@/components/Account/TagsSection.vue";
import Notes from "@/components/Account/Notes.vue";
import NumberPad from "@/components/Account/NumberPad.vue";
import dayjs from "dayjs";


@Component({
  components: {Topbar, Tab, DateSection, TagsSection, Notes, NumberPad}
})
export default class Account extends Vue {
  record: newRecordItem = {
    category: "-" as Category,
    tagId: 1,
    note: "",
    amount: 0,
    createdAt: dayjs(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
  };
  placeholder = dayjs(new Date().toISOString()).format("MM-DD");

  saveRecord() {
    console.log("1");
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.outer {
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .center {
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