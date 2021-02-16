<template>
  <div id="chartLine"/>
</template>

<script lang="ts">

import {Component, Prop, Watch} from "vue-property-decorator";

const echarts = require("echarts");
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import dayjs from "dayjs";
import {mixins} from "vue-class-component";
import Common from "@/mixins/common";
import clone from "@/lib/clone";

@Component
export default class MyLine extends mixins(Common) {
  @Prop() monthTitle!: number;
  @Prop() dataLine!: RecordItem[];
  chartLine: any = null;
  options = {

    tooltip: {
      trigger: "axis",
      position: "top",
      triggerOn: "click",
      formatter: "{c}"
    },
    legend: {
      data: [""]
    },

    grid: {
      left: 0,
      right: "1%",
      bottom: "10%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [] as any,
      axisTick: {alignWidthLabel: true},
      axisLine: {lineStyle: {color: "#666"}},
    },
    yAxis: {
      type: "value",
      splitNumber: 2,
      scale: true,
      show: false,
      splitLine: {
        show: false
      }
    },
    series: [{
      symbol: "circle",
      lineStyle: {
        color: "#e1c748"
      },
      itemStyle: {
        borderWidth: 5,
        color: "#e1c748",
      },
      name: "",
      type: "line",
      data: [] as any
    }
    ]
  };

  mounted() {
    this.init();
  }

  @Watch("dataLine", {deep: true})
  onData() {
    this.options.xAxis.data = [];
    this.options.series[0].data = [];
    this.changeData();
    this.chartLine.setOption(this.options, true);
  }

  changeData() {
    const newValue = clone(this.dataLine);
    for (let i = 0; i < newValue.length - 1; i++) {
      for (let j = i + 1; j < newValue.length; j++) {
        if ((newValue[i].createdAt).slice(0, 10) === (newValue[j].createdAt).slice(0, 10)) {
          newValue[i].amount += newValue[j].amount;
        }
      }
    }

    for (let i = 1; i <= this.monthTitle; i++) {
      let t = 0;
      for (let j = 0; j < newValue.length; j++) {
        if (i === dayjs(newValue[j].createdAt).date()) {
          t++;
          this.options.xAxis.data.push(i + "日");
          this.options.series[0].data.push(this.numberFilter(newValue[j].amount));
          break;
        }
      }
      if (t === 0) {
        this.options.xAxis.data.push(i + "日");
        this.options.series[0].data.push(0);
      }
    }

  }

  init() {
    this.changeData();
    // 执行图表对象的初始化
    this.chartLine = echarts.init(document.getElementById("chartLine"));
    // 为图标表对象赋值
    this.chartLine.setOption(this.options, true);
  }
}
</script>

<style scoped lang="scss">
#chartLine {
  width: 430%;
  //left: -30px;
  min-height: 30vh;
}

</style>