module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    // 以下babel6引入方法
    // "transform-vue-jsx",//处理全局函数、优化babel插件
    // "transform-runtime",//编译jsx
    // ["import", {
    //   "libraryName": "vant",
    //   "libraryDirectory": "es",//es6模块项目，import 来引用模块，打包体积更小
    //   "style": true
    // }]
    //以下babel7引入方法
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-object-rest-spread",
    "transform-vue-jsx",
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
