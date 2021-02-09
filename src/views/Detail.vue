<template>
  <Layout slot-span >
    <RecordsItem :records="recordList"
                 formatArray="MM月DD日"
                 :newRecords="newRecords"

    />
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import RecordsItem from "@/components/RecordsItem.vue";
import dayjs from "dayjs";

@Component({
  components: {Layout,RecordsItem}
})
export default class Detail extends Vue {
  created() {
    this.$store.commit("fetchRecord");
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  //
  newRecords(records: RecordItem[]){
    return (records.sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()));
  }

  // mouthRecords (array: HashArray) {
  //   return array.filter(r => createTime.slice(5) === r[0].slice(0, 2));
  // };
  // mouthTotal (e:Event,type: Category){
  //   return totalDate(this.recordList.filter(r => (r.createdAt).indexOf(createTime) !== -1), type);
  // };


}
</script>

<style scoped lang="scss">
</style>