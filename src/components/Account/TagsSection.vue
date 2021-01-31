<template>
  <ul class="wrapper">
    <li>
      <Icon name="交通"/>
      交通
    </li>
    <li>
      <Icon name="人情"/>
      人情
    </li>
    <li>
      <Icon name="红包"/>
      红包
    </li>
    <li>
      <Icon name="工资"/>
      工资
    </li>
    <li>
      <Icon name="旅游"/>
      旅游
    </li>
    <li>
      <Icon name="交通"/>
      交通
    </li>
    <li>
      <Icon name="人情"/>
      人情
    </li>
    <li>
      <Icon name="红包"/>
      红包
    </li>
    <li>
      <Icon name="工资"/>
      工资
    </li>
    <li>
      <Icon name="旅游"/>
      旅游
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "TagsSection"
};
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