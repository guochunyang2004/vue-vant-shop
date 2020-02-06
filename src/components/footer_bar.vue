<template>
  <div>
    <van-tabbar v-model="footer_active">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/cateList" icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">识物</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name :"footer_bar",
    props: {
      active: {
        type: Number,
        default: 0,
      },
    },
    created() {
      this.footer_active = this.active
    },
    data() {
        return {
            footer_active: 0
        }
    }
}
</script>

<style>

</style>