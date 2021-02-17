import Vue from "vue";
import Component from "vue-class-component";
import dayjs from "dayjs";


@Component
export class Common extends Vue {
   totalDate (records: RecordItem[], type: Category) {
    return records.filter(r => r.category === type)
      .reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
  }
   numberFilter (value: number){
    return parseFloat(String(value)).toFixed(2)
  }
  formatTime(value: string){
    return dayjs(value).format("YYYY年MM月DD日 HH:mm:ss")
  }
}

export default Common