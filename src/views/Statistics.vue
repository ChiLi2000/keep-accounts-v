<template>
  <Layout class-prefix="outer">
    <RecordsItem/>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import RecordsItem from "@/components/RecordsItem.vue";

@Component({
  components: {Layout,RecordsItem}
})
export default class Statistics extends Vue {
}
</script>

<style scoped lang="scss">
.outer-wrapper{

  ::v-deep.tab-wrapper {
    li.selected {
      border-bottom: 2px solid gray;
    }}
}
</style>