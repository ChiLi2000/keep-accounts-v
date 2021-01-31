<template>
  <div class="wrapper">
    <Topbar/>
  </div>
</template>

<script lang="ts">
import Topbar from "@/components/Account/Topbar.vue";

export default {
  name: "Account",
  components: {Topbar}
};
</script>

<style scoped lang="scss">
.wrapper {
  background: white;
}
</style>