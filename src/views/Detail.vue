<template>
  <Layout slot-span :valueTime.sync="createTime">
    <RecordsItem :records="recordList"
                 formatArray="MM月DD日"
                 :mouthRecords="mouthRecords"
                 :newRecords="newRecords"
                 v-bind:createTime="createTime"

    />
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import RecordsItem from "@/components/RecordsItem.vue";
import dayjs from "dayjs";

@Component({
  components: {Layout, RecordsItem}
})
export default class Detail extends Vue {
  createTime = dayjs(new Date().toISOString()).format("YYYY-MM");

  created() {
    this.$store.commit("fetchRecord");
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  newRecords(records: RecordItem[]) {
    return (records.sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()));
  }

  mouthRecords(array: HashArray, createTime: string) {
    return array.filter(r => r && createTime === r[1][0].createdAt.slice(0, 7));
  }
}
</script>

<style scoped lang="scss">
</style>