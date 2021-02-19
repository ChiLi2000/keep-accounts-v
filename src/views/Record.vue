<template>
  <div>
    <Topbar :center-context="false"/>
    <div class="main">
      <div class="itemIcon">
        <Icon :name="`${getValue(record.tagId,true)}`"/>
        {{ getValue(record.tagId, false) }}
      </div>
      <div class="itemAmount">{{ record.category + numberFilter(record.amount) }}</div>
      <div class="itemDetail">
        <div class="left"><p>记录时间</p>
          <p>备注</p></div>
        <div class="right"><p>{{ formatTime(record.createdAt) }}</p>
          <p v-if="record.note!==''">{{ record.note }}</p>
          <p v-else>无</p></div>
      </div>
      <div class="selectButton">
        <button @click="dialogVisible = true">
          <Icon name="delete"/>
          删除
        </button>
        <button>
          <router-link :to="`/update/${record.idR}`">
            <Icon name="edit"/>
            编辑
          </router-link>
        </button>
      </div>
    </div>
<DeleteCue :dialogVisible.sync="dialogVisible" @submit="deleteRecord(record.idR)">
  <span>删除后无法恢复，是否删除</span>
</DeleteCue>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import Topbar from "@/components/Account/Topbar.vue";
import {mixins} from "vue-class-component";
import Common from "@/mixins/common";
import DeleteCue from "@/components/DeleteCue.vue";

@Component({
  components: {Topbar,DeleteCue}
})
export default class Record extends mixins(Common) {
  record?: RecordItem = undefined;
  dialogVisible = false;

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  created() {
    this.$store.commit("fetchRecord");
    this.$store.commit("fetchTags");
    const id = parseInt(this.$route.params.id);
    this.record = this.recordList.filter(r => r.idR === id)[0];
  }

  deleteRecord(idR: number) {
    this.$store.commit("deleteRecord", idR);
    this.$router.back();
    this.$message({
      message: "已删除",
      type: "success",
      duration:1000,
      center:true,
    });
  }

  get tagList(): Tag[] {
    return this.$store.state.tagList;
  }

  getValue(id: number, x: boolean) {
    const tag = this.tagList.filter(t => t.id === id)[0];
    return x ? tag.value : tag.name;
  }

}
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  margin: 10px 14px;
  padding: 0 16px;
  background: white;
  border-radius: 16px;
}

.itemIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 8px 0;

  .icon {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
}

.itemAmount {
  text-align: center;
  padding: 16px 0;
  font-size: 28px;
  font-weight: 600;
}

.itemDetail {
  padding: 16px 12px 0 12px;
  display: flex;
  flex-direction: row;

  > div {
    padding: 8px 0;
  }

  .left {
    color: #999;
    margin-right: 20px;
  }

  p {
    margin: 0 0 16px;
  }

}

.selectButton {
  border-top: 1px solid #dedede;

  > button {
    width: 50%;
    padding: 18px 0;
    background: transparent;
    border: none;
    text-align: center;

    .icon {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
}

</style>