<template>
  <div>
    <ul>
      <li v-for="[date, list] in groupedList" :key="date">
        <h3>
          <span>{{date}}</span>
          <span class="right">支出：{{ numberFilter(totalDate(list, '-')) }} 收入： {{numberFilter(totalDate(list, '+'))}}</span>
        </h3>
        <ol>
          <li class="item" v-for="record in newRecords(list)"
              :key="record.idR">
            <Icon name="餐饮"/>
            <p class="topItem">{{ record.tagId }} <span>{{ record.category + numberFilter(record.amount) }}</span></p>
            <p class="bottomItem">{{ record.note }} <span>{{ record.createdAt }}</span></p></li>

        </ol>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop} from "vue-property-decorator";
import {mixins} from "vue-class-component";
import dayjs from "dayjs";
import Common from "@/mixins/common";
import clone from "@/lib/clone";
type HashType = {
  [key: string]: RecordItem[];
}
@Component
export default class RecordsItem extends mixins(Common) {
  @Prop() records!: RecordItem[];
  @Prop() formatArray!: string;
  @Prop() mouthRecords!: ((array: HashArray) => HashArray);
  @Prop() newRecords!: ((records: RecordItem[]) => RecordItem[]);

  get groupedList(){
    const hash: HashType = {};
    const {records}=this
    const newList = clone(records)
    newList.forEach(r => {
      const key = dayjs(r.createdAt).format(this.formatArray);
      if (!(key in hash)) {
        hash[key] = [];
      }
      hash[key].push(r);
    });
    const array: HashType = Object.entries(hash).sort((a, b) => {
      if (a[0] === b[0]) return 0;
      if (a[0] > b[0]) return -1;
      if (a[0] < b[0]) return 1;
      return 0;
    });
    return array
  }

}
</script>

<style scoped lang="scss">
h3 {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  line-height: 24px;
  padding: 12px 14px;

  .right {
    font-size: 14px;
  }
}

.item {
  background: white;

  display: grid;
  grid: auto auto / 38px 1fr;
  padding: 8px 14px;

  .icon {
    width: 38px;
    height: 38px;
    grid-column: 1;
    grid-row: 1 / span 2;
    margin-top: 2px;
  }

  p {
    margin: 0;
    padding: 2px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.topItem {
  grid-column: 2;
  grid-row: 1;

  > span {
    font-size: 18px;
  }
}

.bottomItem {
  grid-column: 2;
  grid-row: 2;
  font-size: 12px;
  color: #999;
  font-weight: normal;
}

</style>