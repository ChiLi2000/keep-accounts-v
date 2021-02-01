<template>
  <Layout slot-span>
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
export default class Detail extends Vue {

}
</script>

<style scoped lang="scss">
</style>