<template>
  <div>
    <van-sticky>
      <!-- header -->
      <van-row style="background:#FFF;">
        <van-col>
          <img class="logo" src="../assets/logo.png" />
        </van-col>
        <van-col>
          <van-search class="index_header_search" v-model="search_v" placeholder="请输入搜索关键词" />
        </van-col>
        <van-col class="loginBtn1">
          <!-- <div class="loginBtn"></div> -->
          <van-button plain hairline round size="small" class="van-button-login" type="warning">登录</van-button>
        </van-col>
      </van-row>

      <!-- 滚动的 tab 按钮 -->
      <van-tabs>
        <van-tab v-for="(item,index) in tabBtnList" :key="index" :title="item"></van-tab>
      </van-tabs>
    </van-sticky>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="0" indicator-color="white">
      <van-swipe-item v-for="(n, index) in imgObj " :key="index">
        <img :src="n.url" />
      </van-swipe-item>
    </van-swipe>

    <!-- 滚动条下广告 -->
    <van-row class="service_info" style="background:#fff;">
      <van-col span="8">
        <i class="icon icon_1"></i>
        <span>网易自营品牌</span>
      </van-col>
      <van-col span="8">
        <i class="icon icon_2"></i>
        <span>30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i class="icon icon_3"></i>
        <span>48小时快速退款</span>
      </van-col>
    </van-row>

    <!-- 二排，十个栏目 -->
    <van-grid :column-num="5" :border="false" style="margin: 0 0 .15rem 0;">
      <van-grid-item v-for="(item,index) in goodsIcon" 
      :key="index"
      :to="item.url">
        <img :src="item.imgurl" class="goods-img" />
        <div>{{item.goodsText}}</div>
      </van-grid-item>
    </van-grid>

    <!-- 商品列表 -->
    <div class="goodsListDiv">
      <h1>
        <label>新品首发</label>
        <a href="#">更多 ></a>
      </h1>
      <van-grid :column-num="3" :border="0" :center="false">
        <van-grid-item v-for="(item,index) in goodsList" :key="index">
          <div class="goods-div">
            <img :src="item.imgurl" class="goods-img" />
          </div>
          <div>{{item.text}}</div>
          <div style="color:#f00;font-size:.3rem;">{{item.price}}</div>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 底部版权 -->
    <footer_copyright />

    <!-- 底部Tabbar -->
    <footer_bar :active="0"/>
  </div>
</template>

<script>
import footer_bar from "./footer_bar";
import footer_copyright from "./footer_copyright";
//import axios from 'axios'

export default {
  name: "app_index",
  components: {
    footer_bar,
    footer_copyright
  },
  data() {
    return {
      active: "",
      msg: "",
      search_v: "",
      tabBtnList: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ],
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
      goodsIcon: [
        {
          imgurl: require("../assets/goods_icon/goods_1.png"),
          goodsText: "新品首发",
          url: '/list?cateId=1'
        },
        {
          imgurl: require("../assets/goods_icon/goods_2.png"),
          goodsText: "居家生活",
          url: '/list?cateId=1'
        },
        {
          imgurl: require("../assets/goods_icon/goods_3.png"),
          goodsText: "服饰鞋包",
          url: '/list?cateId=1'
        },
        {
          imgurl: require("../assets/goods_icon/goods_4.png"),
          goodsText: "美食酒水",
          url: '/list?cateId=1'
        },
        {
          imgurl: require("../assets/goods_icon/goods_5.png"),
          goodsText: "个护清洁",
          url: '/list?cateId=1'
        },
        {
          imgurl: require("../assets/goods_icon/goods_6.png"),
          goodsText: "母婴亲子",
          url: '/list?cateId=1'
        },
        {
          imgurl: require("../assets/goods_icon/goods_7.png"),
          goodsText: "运动旅行",
          url: '/list?cateId=1'
        },
        {
          imgurl: require("../assets/goods_icon/goods_8.png"),
          goodsText: "数码家电",
          url: '/list?cateId=1'
        },
        {
          imgurl: require("../assets/goods_icon/goods_9.png"),
          goodsText: "全球特色",
          url: '/list?cateId=1'
        },
        {
          imgurl: require("../assets/goods_icon/goods_10.gif"),
          goodsText: "好货抄底",
          url: '/list?cateId=1'
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
  created() {
    // axios.get('http://localhost:5632/tabs')
    //   .then(_d => {
    //     this.msg = _d.data;
    //   });
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 1.2rem;
  /* height: .5rem; */
  display: inline-block;
  margin: 0.2rem 0 0 0.3rem;
}
.index_header_search {
  width: 3.5rem;
  border: 0;
  margin: 0.1rem 0 0 0.1rem;
  padding: 0;
}
.index_header_search .van-search__content {
  background: #ededed;
  border-radius: 0.15rem;
}

/* 登录按钮 */
.van-button-login {
  margin: 0.1rem 0 0 0.1rem;
}
.loginBtn {
  margin: 0.15rem 0 0 0.2rem;
  width: 0.8rem;
  height: 0.45rem;
  color: #f00;
  line-height: 0.45rem;
  text-align: center;
  font-size: 0.22rem;
  border-radius: 0.15rem;
  border: 1px solid #f00;
}

/* 轮播图 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

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
  width: 0.42667rem;
  height: 0.42667rem;
  vertical-align: middle;
}
.service_info i.icon_1 {
  background-image: url("../assets/icon1.png");
}
.service_info i.icon_2 {
  background-image: url("../assets/icon2.png");
}
.service_info i.icon_3 {
  background-image: url("../assets/icon3.png");
}
/* icon end */

.goods-img {
  width: 100%;
  height: 100%;
}

.goodsListDiv {
  clear: both;
  margin: 0.2rem 0;
  background: #fff;
}
.goodsListDiv h1 {
  display: block;
  clear: both;
  margin: 0 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-weight: normal;
  font-family: PingFangSC-Regular;
  padding: 0.2rem 0 0 0;
}
.goodsListDiv h1 label {
  float: left;
  font-size: 0.3rem;
}
.goodsListDiv h1 a {
  float: right;
  font-size: 0.25rem;
}
.goods-div {
  width: 100%;
  background: #ededed;
}
</style>

