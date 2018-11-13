<style lang="less">
  html {
    height: 100%;
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      #app {
        height: 100%;
        .menu-title {
          width: 60%;
          display: flex;
          align-content: space-between;
          a {
            color: antiquewhite;
            text-decoration: none;
            margin: 0 12% 0 6%;
          }
          .router-link-active {
            color: #ffffff;
          }
        }
        .vux-header-right {
          top: 10px;
          div {
            font-size: 30px;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="app" style="height:100%;">
    <drawer
    width="200px;"
    :show.sync="drawerVisibility"
    :show-mode="showModeValue"
    :placement="showPlacementValue"
    :drawer-style="{'background-color':'#35495e', width: '200px'}">
    <div slot="drawer">
      sdfsdfsdf
    </div>
    <x-header :style="{background:background}">
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;" @click="showSetting()"></x-icon>
      <div class="menu-title">
        <router-link class="" v-for="(path, index) in menu" :to="path.children[0].path" :key="index">{{ path.name }}</router-link>
      </div>
      <div slot="right">+</div>
    </x-header>
    <div ref="wrapper">
      <router-view/>
    </div>
    </drawer>
  </div>
</template>

<script>
import { Drawer, XHeader } from 'vux'
import routers from './router'
import BScroll from 'better-scroll'
export default {
  name: 'App',
  components: {
    'drawer': Drawer,
    'x-header': XHeader
  },
  data () {
    return {
      menu: routers,
      showModeValue: 'push',
      drawerVisibility: false,
      showPlacementValue: 'left',
      background: '#34c17d'
    }
  },
  methods: {
    showSetting () {
      this.drawerVisibility = true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  }
}
</script>
