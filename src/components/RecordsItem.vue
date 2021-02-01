<template>
  <div>
    <ul>
      <li>
        <h3>
        <span>02月01日</span>
        <span class="right">支出：100 收入： 200 </span>
        </h3>
        <ol>
          <li class="item"><Icon name="餐饮"/>
          <p class="topItem">餐饮 <span>-22.00</span></p>
          <p class="bottomItem">早餐 <span>21:36:58</span></p></li>
          <li class="item"><Icon name="红包"/>
            <p class="topItem">红包 <span>100.00</span></p>
            <p class="bottomItem">一点点 <span>21:36:58</span></p></li>
        </ol>
      </li>
      <li>
        <h3>
          <span>02月01日</span>
          <span class="right">支出：100 收入： 200 </span>
        </h3>
        <ol>
          <li class="item"><Icon name="餐饮"/>
            <p class="topItem">餐饮 <span>-22.00</span></p>
            <p class="bottomItem">早餐 <span>21:36:58</span></p></li>
          <li class="item"><Icon name="餐饮"/>
            <p class="topItem">餐饮 <span>-22.00</span></p>
            <p class="bottomItem">早餐 <span>21:36:58</span></p></li>
          <li class="item"><Icon name="餐饮"/>
            <p class="topItem">餐饮 <span>-22.00</span></p>
            <p class="bottomItem">早餐 <span>21:36:58</span></p></li>
        </ol>
      </li>
      <li>
        <h3>
          <span>02月01日</span>
          <span class="right">支出：100 收入： 200 </span>
        </h3>
        <ol>
          <li class="item"><Icon name="餐饮"/>
            <p class="topItem">餐饮 <span>-22.00</span></p>
            <p class="bottomItem">早餐 <span>21:36:58</span></p></li>
          <li class="item"><Icon name="餐饮"/>
            <p class="topItem">餐饮 <span>-22.00</span></p>
            <p class="bottomItem">早餐 <span>21:36:58</span></p></li>
          <li class="item"><Icon name="餐饮"/>
            <p class="topItem">餐饮 <span>-22.00</span></p>
            <p class="bottomItem">早餐 <span>21:36:58</span></p></li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "RecordsItem"
}
</script>

<style scoped lang="scss">
h3{
  margin:0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  line-height: 24px;
  padding: 12px 14px;
  .right{
    font-size: 14px;
  }
}
.item{
  background: white;

    display: grid;
    grid: auto auto / 38px 1fr;
    padding:8px 14px;
    .icon{
      width: 38px;
      height: 38px;
      grid-column: 1;
      grid-row: 1 / span 2;
      margin-top: 2px;
    }
    p{
      margin:0;
      padding: 2px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
.topItem{
  grid-column: 2;
  grid-row: 1;
  >span{
    font-size:18px;
  }
}
.bottomItem{
  grid-column: 2;
  grid-row: 2;
  font-size: 12px;
  color: #999;
  font-weight: normal;
}

</style>