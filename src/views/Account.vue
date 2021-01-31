<template>
  <div class="wrapper">
    <Topbar/>
    <Tab/>
  </div>
</template>

<script lang="ts">

import {Vue, Component} from "vue-property-decorator";
import Topbar from "@/components/Account/Topbar.vue";
import Tab from "@/components/Account/Tab.vue";

@Component({
  components: {Topbar, Tab}
})
export default class Account extends Vue {

}
</script>

<style scoped lang="scss">
.wrapper {
  background: white;
}
</style>