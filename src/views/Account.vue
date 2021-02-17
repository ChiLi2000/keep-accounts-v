<template>
  <RecordEdit :record.sync="record" />
</template>

<script lang="ts">

import {Vue, Component} from "vue-property-decorator";
import dayjs from "dayjs";
import RecordEdit from "@/components/RecordEdit.vue";

@Component({
  components: {RecordEdit}
})
export default class Account extends Vue {
  record: newRecordItem = {
    category: "-" as Category,
    tagId: 1,
    note: "",
    amount: 0,
    createdAt: dayjs(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
  };
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