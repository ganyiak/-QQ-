<style lang="less">
  .music-hall {
    .weui-search-bar:before, .weui-search-bar:after {
      border: none;
    }
    .weui-search-bar {
      background: #34c17d;
      .weui-search-bar__cancel-btn {
        color: #ffffff;
        text-decoration: none;
      }
    }
    .tabbar {
      margin-top: -1%;
      .weui-tabbar {
        position: relative;
        width: 96%;
        left: 2%;
        background: #ffffff;
        a {
          color: #ffffff;
          text-decoration: none;
          span {
            color: #000;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="music-hall">
   <search
    :auto-fixed="atuoFixed"
   ></search>
   <swiper :list="list" :auto="auto" :loop="auto"></swiper>
   <div class="tabbar">
     <tabbar>
       <tabbar-item v-for="(sub, index) in routers" :key="index" :link="sub.path">
        <span slot="label">{{ sub.menuName }}</span>
       </tabbar-item>
     </tabbar>
   </div>
  </div>
</template>

<script>
import { Search, Swiper, Tabbar, TabbarItem } from 'vux'
import routers from '../../router/index.js'
export default {
  components: {
    'search': Search,
    'swiper': Swiper,
    'tabbar': Tabbar,
    'tabbar-item': TabbarItem
  },
  data () {
    return {
      atuoFixed: true,
      auto: true,
      routers: routers[1].children[0].children,
      list: [
        {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
          title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
          title: '送你一次旅行',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        },
        {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
          title: '送你一辆车'
        }
      ]
    }
  },
  mounted () {
    console.log(this.routers)
  }
}
</script>
