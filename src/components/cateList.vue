<template>
  <div>
    <van-sticky>
      <!-- header -->
      <van-row style="background:#FFF;">
        <van-search class="index_header_search" v-model="search_v" placeholder="搜索商品, 共19547款好物" />
      </van-row>
    </van-sticky>

    <van-row >
      <van-col span="6">
        <!-- 侧边导航 -->
        <van-sidebar class="cate-sidebar" v-model="activeKey" @change="sidebarOnChange">
          <van-sidebar-item v-for="(item) in cateList" :key="item.id" 
          :title="item.title"
          :to="'/cateList?categoryId='+item.id" />
        </van-sidebar>
      </van-col>
      <van-col span="18" style="background:#fff;" >
        <div style="height:100%;">
          <!-- 商品广告 -->
          <div style="margin: .2rem .2rem .1rem .1rem;">
            <img :src="adurl" />
          </div>

          <!-- 商品列表 -->
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
      </van-col>
    </van-row>

    


    <!-- 底部版权 -->
    <!-- <footer_copyright /> -->

    <!-- 底部Tabbar -->
    <footer_bar :active="1" />
  </div>
</template>

<script>
import footer_bar from "./footer_bar";
//import footer_copyright from "./footer_copyright"
import { Notify } from "vant";
export default {
  name: "cateList",
  components: {
    footer_bar,
    
  },
  data() {
    return {
      activeKey: 0,
      adurl: require("../assets/catelist/ad/ad1.png"),
      cateList: [
        { id: 1, title: "推荐专区" },
        { id: 2, title: "宅家防护" },
        { id: 3, title: "爆品专区" },
        { id: 4, title: "新品专区" },
        { id: 5, title: "居家生活" },
        { id: 6, title: "服饰鞋包" },
        { id: 7, title: "美食酒水" },
        { id: 8, title: "个护清洁" },
        { id: 9, title: "母婴亲子" },
        { id: 10, title: "运动旅行" },
        { id: 11, title: "数码家电" },
        { id: 12, title: "全球特色" }
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
    sidebarOnChange(index) {
      Notify({ type: "primary", message: index });
    }
  }
};
</script>

<style>
.cate-sidebar .van-sidebar-item {
  padding: .23rem 12px .23rem 8px;
  background: #fff;
}
</style>