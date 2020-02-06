import Vue from 'vue'
import Router from 'vue-router'
import app_index from '@/components/app_index'
import cateList from '@/components/cateList'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'app_index',
            component: app_index
        },
        {
            path: '/cateList',
            name: 'cateList',
            component: cateList
        },
        {
            path: '/list',
            name: 'list',
            component: list
        }
    ]
})