import Vue from "vue";
import Component from "vue-class-component";


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
}

export default Common