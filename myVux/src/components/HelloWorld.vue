<style lang="less">
  body {
    width: 100%;
    margin: 0;
  }
</style>

<template>
  <div>
    <x-header></x-header>
    <Actionsheet v-model="isShow" :menus="{menu1: '删除', menu2: '取消'}" :close-on-clicking-mask="false" @on-click-menu-menu1="deleteTest()"></Actionsheet>
    <v-button
      type="warn"
      style="height: 50px"
      @click.native="showMask()"
    >
      点击删除
    </v-button>
    <tabbar style="width: 100%;position: fixed">
      <tabbar-item>
        <span slot="label">聊天</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">好友</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Actionsheet, XButton, Tabbar, TabbarItem, XHeader } from 'vux'
export default {
  name: 'HelloWorld',
  components: {
    Actionsheet,
    'v-button': XButton,
    Tabbar,
    TabbarItem,
    XHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow: false
    }
  },
  methods: {
    deleteTest () {
      console.log('点击了删除')
    },
    showMask () {
      this.isShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
