<template>
  <RecordEdit :record.sync="record" :recordId="record.idR"/>
</template>

<script lang="ts">
import {Vue,Component} from "vue-property-decorator";
import RecordEdit from "@/components/RecordEdit.vue";

@Component({
  components: {RecordEdit}
})
export default class Update extends Vue{
  record?: RecordItem = undefined;

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  created() {
    this.$store.commit("fetchRecord");
    const id = parseInt(this.$route.params.id);
    this.record = this.recordList.filter(r => r.idR === id)[0];
  }
}
</script>

<style scoped lang="scss">

</style>