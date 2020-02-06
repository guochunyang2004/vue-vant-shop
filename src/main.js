import './assets/rem';//默认引入.js
import './assets/reset.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Notify, Button, Row, Col, Search, Tab, Tabs, Swipe, SwipeItem,
  Grid, GridItem,
  Tabbar, TabbarItem, Sticky,
  Sidebar, SidebarItem   } from 'vant';

Vue.config.productionTip = false

Vue.use(Button).use(Notify)
  .use(Row).use(Col)
  .use(Search)
  .use(Tab).use(Tabs)
  .use(Swipe).use(SwipeItem)
  .use(Grid).use(GridItem)
  .use(Tabbar).use(TabbarItem)
  .use(Sticky)
  .use(Sidebar).use(SidebarItem);

new Vue({
  router,
  render: h => h(App),  
}).$mount('#app')
