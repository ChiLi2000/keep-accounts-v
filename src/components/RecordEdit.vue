<template>
  <div class="outer">
    <Topbar :center-context="true"/>
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
import {Vue, Component, Prop} from "vue-property-decorator";
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
export default class RecordEdit extends Vue {
  @Prop() record!: newRecordItem;
  @Prop() recordId?: number;
  placeholder = dayjs(new Date().toISOString()).format("MM-DD");

  saveRecord() {
    if (this.record.amount === 0) {
      this.$message({
        message: "请输入具体金额",
        type: "warning",
        duration: 1000,
        center: true,
      });
    } else {
      if (this.recordId) {
        this.$store.commit("updateRecord", {idR: this.recordId, newRecord: this.record});
        this.$router.back();
        this.$message({
          message: "修改成功",
          type: "success",
          duration: 1000,
          center: true,
        });
      } else {
        this.$store.commit("createRecord", this.record);
        if (this.$store.state.createRecordError === null) {
          this.$message({
            message: "已记一笔",
            type: "success",
            duration: 1000,
            center: true,

          });
          this.$router.push({path: "/"});
        }
      }

    }
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