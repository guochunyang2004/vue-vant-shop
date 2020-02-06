<template>
  <div>
    <van-sticky>
      <!-- header -->
      <van-row class="service_info" style="background:#fff;">
        <van-col span="1" offset="1" justify="center">
          <i class="icon icon_1" @click="onHome"></i>
        </van-col>
        <van-col span="17">
          <i class="icon icon_2" @click="onHome"></i>
        </van-col>
        <van-col span="1">
          <i class="icon icon_3"></i>
        </van-col>
        <van-col span="1" offset="1">
          <i class="icon icon_4"></i>
        </van-col>
      </van-row>
    </van-sticky>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="0" indicator-color="white">
      <van-swipe-item v-for="(n, index) in imgObj " :key="index">
        <img :src="n.url" />
      </van-swipe-item>
    </van-swipe>

    <!-- 商品列表 -->
    <van-grid :column-num="2" :border="0" :center="false">
      <van-grid-item v-for="(item,index) in goodsList" :key="index">
        <div class="goods-div">
          <img :src="item.imgurl" class="goods-img" />
        </div>
        <div>{{item.text}}</div>
        <div style="color:#f00;font-size:.3rem;">{{item.price}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgObj: [
        {
          title: "新品首发",
          url: require("../assets/ad/ad1.png")
        },
        {
          title: "",
          url: require("../assets/ad/ad2.png")
        },
        {
          title: "",
          url: require("../assets/ad/ad3.png")
        },
        {
          title: "",
          url: require("../assets/ad/ad4.png")
        }
      ],
      goodsList: [
        {
          imgurl: require("../assets/goods_list/goods_1.png"),
          text: "三寸黄金，自然天成，重庆奉节脐橙 6斤",
          price: "￥49",
          gradientPrice: 1
        },
        {
          imgurl: require("../assets/goods_list/goods_2.png"),
          text: "多样炖煮煎炒 mini分体式电火锅",
          price: "￥169",
          gradientPrice: 2
        },
        {
          imgurl: require("../assets/goods_list/goods_3.png"),
          text: "无惧眼圈干纹 活颜修护精华眼霜 15ml",
          price: "￥89.9",
          gradientPrice: 3
        },
        {
          imgurl: require("../assets/goods_list/goods_1.png"),
          text: "三寸黄金，自然天成，重庆奉节脐橙 6斤",
          price: "￥49",
          gradientPrice: 1
        },
        {
          imgurl: require("../assets/goods_list/goods_2.png"),
          text: "多样炖煮煎炒 mini分体式电火锅",
          price: "￥169",
          gradientPrice: 2
        },
        {
          imgurl: require("../assets/goods_list/goods_3.png"),
          text: "无惧眼圈干纹 活颜修护精华眼霜 15ml",
          price: "￥89.9",
          gradientPrice: 3
        }
      ]
    };
  },
  methods: {
    onHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
/* icon */
.service_info {
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
}
.service_info i.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100%;
  /* width: 0.42667rem;
  height: 0.42667rem; */

  vertical-align: middle;
  background-image: url("../assets/icon.png");
  background-repeat: no-repeat;
}
.service_info i.icon_1 {
  /* background-image: url("../assets/icon1.png"); */
  background-position: 0 -0.65rem;
  width: 1.5rem;
  height: 0.4rem;
}
.service_info i.icon_2 {
  background-position: 0 -1.1rem;
  width: 1.5rem;
  height: 0.4rem;
}
.service_info i.icon_3 {
  background-position: 0 -3.2rem;
  width: 1.5rem;
  height: 0.4rem;
}
.service_info i.icon_4 {
  /* background-image: url("../assets/icon3.png"); */
  background-position: 0 -0.1rem;
  width: 1.5rem;
  height: 0.4rem;
}

/* icon end */

/* 轮播图 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>