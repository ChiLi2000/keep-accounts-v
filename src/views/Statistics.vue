<template>
  <Layout class-prefix="outer"
          :valueTime.sync="createTime"
          :valueType.sync="type"
  >
    <div class="myLine-wrapper"
         v-if="mouthRecordsChar()[0]!==undefined">
      <MyLine :monthTitle="monthTitle"
              :dataLine="mouthRecordsChar()"/>
    </div>
    <RecordsItem :records="recordList"
                 formatArray="YYYY年MM月"
                 :mouthRecords="mouthRecords"
                 :newRecords="newRecords"
                 v-bind:createTime="createTime"
                 :type="type"
    />
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import RecordsItem from "@/components/RecordsItem.vue";
import dayjs from "dayjs";
import MyLine from "@/components/MyLine.vue";

@Component({
  components: {Layout, RecordsItem, MyLine}
})
export default class Statistics extends Vue {
  createTime = dayjs(new Date().toISOString()).format("YYYY-MM");
  monthTitle = dayjs(this.createTime).daysInMonth();
  type = "-" as Category;

  created() {
    this.$store.commit("fetchRecord");
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  newRecords(records: RecordItem[]) {
    return (records.filter(r => r.category === this.type).sort((a, b) => b.amount - a.amount));
  }

  mouthRecords(array: HashArray, createTime: string) {
    return array.filter(r => dayjs(createTime).format("YYYY年MM月") === r[0]);
  }

  mouthRecordsChar() {
    return this.newRecords(this.recordList.filter(r => this.createTime === r.createdAt.slice(0, 7)));
  }
}
</script>

<style scoped lang="scss">
.outer-wrapper {

  ::v-deep.tab-wrapper {
    li.selected {
      border-bottom: 2px solid gray;
    }
  }
}

.myLine-wrapper {
  flex: 1;
  width: 100vm;
  overflow: auto;
  background-color: #fbfbfb;
}
</style>