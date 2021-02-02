<template>
  <ul class="wrapper">
    <li v-for="tag in tagList" :key="tag.id"
        :class="{selected:tag.id ===selectedTagId }"
        @click="toggle(tag.id)"
    >
      <Icon :name="`${tag.value}`"/>
      {{ tag.name }}

    <li @click="createTag">
      <Icon name="add"/>
      添加
    </li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

const map: { [key: string]: string } = {
  "tag name null": "类别名不能为空",
  "tag name duplicated": "类别名重复了",
  "tag name lengthOver": "类别名超长了"
};
@Component
export default class TagsSection extends Vue {
  @Prop(Number) selectedTagId!: number;

  created() {
    this.$store.commit("fetchTags");
  }

  get tagList() {
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
</style>