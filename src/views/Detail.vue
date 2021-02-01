<template>
  <Layout slot-span>
    <div>...</div>
  </Layout>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import Layout from "@/components/Layout.vue";

@Component({
  components: {Layout}
})
export default class Detail extends Vue {

}
</script>

<style scoped lang="scss">
</style>