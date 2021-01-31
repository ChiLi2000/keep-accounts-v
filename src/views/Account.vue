<template>
  <div class="wrapper">
    <Topbar/>
    <div class="tab_date">
      <Tab/>
      <Date/>
    </div>
  </div>
</template>

<script lang="ts">

import {Vue, Component} from "vue-property-decorator";
import Topbar from "@/components/Account/Topbar.vue";
import Tab from "@/components/Account/Tab.vue";
import Date from "@/components/Account/Date.vue";

@Component({
  components: {Topbar, Tab, Date}
})
export default class Account extends Vue {

}
</script>

<style scoped lang="scss">
.wrapper {
  background: white;
}

</style>