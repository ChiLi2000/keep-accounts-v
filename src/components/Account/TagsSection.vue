<template>
  <ul class="wrapper">
    <li v-for="tag in tagList" :key="tag.id"
        :class="{selected:tag.id ===selectedTagId }"
        @click="toggle(tag.id)"
        v-longpress="onItemTouchEnd(`${tag.id}`,`${tag.name}`)"
    >
      <Icon :name="`${tag.value}`"/>
      {{ tag.name }}
    </li>
    <li @click="createTag">
      <Icon name="add"/>
      添加
    </li>
    <el-dialog :append-to-body="true" title="请编辑类别名" :visible.sync="showDialog" :before-close="cancel">
      <el-form>
        <el-form-item>
          <el-input v-model="middleName" @input="overLength"></el-input>
          <p class="msg">{{ middleName.length }} / 4</p>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="deleteTag">删除</el-button>
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="updateTag">确 定</el-button>
      </div>
    </el-dialog>
  </ul>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import longpress from "@/lib/longpress";

const map: { [key: string]: string } = {
  "tag name null": "类别名不能为空",
  "tag name duplicated": "类别名重复了",
  "tag name lengthOver": "类别名超长了"
};
@Component({
  directives: {longpress}
})
export default class TagsSection extends Vue {
  @Prop(Number) selectedTagId!: number;
  showDialog = false;
  middleName = "";
  middleId = "";

  onItemTouchEnd(id: number, name: string) {
    return () => {
      this.middleId = id.toString();
      this.middleName = name;
      this.showDialog = true;
    };
  }

  created() {
    this.$store.commit("fetchTags");
  }

  get tagList(): Tag[] {
    return this.$store.state.tagList;
  }

  toggle(id: number) {
    this.$emit("update:selectedTagId", id);
  }

  createTag() {
    const name = window.prompt("请输入类别名", "类别名4字以内且不重复");
    if (name !== null) {
      this.$store.commit("createTag", {name: name, value: "其它"});
      if (this.$store.state.createTagError) {
        window.alert(
            map[this.$store.state.createTagError.message] || "未知错误"
        );
      }
    }
  }

  deleteTag() {
    this.$store.commit("deleteTag", parseInt(this.middleId));
    this.toggle(this.$store.state.tagList[0].id);
    this.cancel();
  }

  updateTag() {
    this.$store.commit("updateTag", {
      id: parseInt(this.middleId),
      name: this.middleName,
    });

    if (this.$store.state.createTagError) {
      window.alert(
          map[this.$store.state.createTagError.message] || "未知错误"
      );
    } else {
      this.cancel();
    }
  }

  cancel() {
    this.showDialog = false;
    this.toggle(parseInt(this.middleId));
  }

  overLength() {
    this.middleName = this.middleName.substring(0, 4);
    this.$emit("change", this.middleName);
  }

}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 0;
  padding: 6px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    padding: 6px 0;
    width: 25%;

    .icon {
      width: 32px;
      height: 32px;
      margin-bottom: 4px;
    }

    &.selected {
      color: #e1c748;

      .icon {
        fill: #e1c748;
      }
    }
  }
}

::v-deep .el-dialog {
  width: 80%;

  .el-dialog__body {
    padding: 15px 20px 0 20px;
  }

  .el-dialog__footer {
    padding: 0 20px 20px 20px;

    .dialog__footer {

      display: flex;

      .el-button {
        justify-content: space-between;
        padding: 10px 14px;
      }
    }
  }

}

::v-deep .el-form-item__content {
  margin-left: 10px !important;

}

.msg {
  text-align: right;
  font-size: 12px;
  color: #999999;
}
</style>