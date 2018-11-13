const hall = () => import(/* webpackChunkName: "hallRouter" */ '../views/musicHall/hall.vue')
const singer = () => import(/* webpackChunkName: "hallRouter" */ '../views/musicHall/singer.vue')
const rank = () => import(/* webpackChunkName: "hallRouter" */ '../views/musicHall/rank.vue')
const classify = () => import(/* webpackChunkName: "hallRouter" */ '../views/musicHall/classify.vue')
const radio = () => import(/* webpackChunkName: "hallRouter" */ '../views/musicHall/radio.vue')
const video = () => import(/* webpackChunkName: "hallRouter" */ '../views/musicHall/video.vue')

const hallRouter = [
  {
    name: 'hall',
    path: '/musicHall/hall',
    component: hall,
    menuName: '音乐馆',
    children: [
      {
        name: 'singer',
        path: '/musicHall/singer',
        component: singer,
        menuName: '歌手'
      },
      {
        name: 'rank',
        path: '/musicHall/rank',
        component: rank,
        menuName: '排行'
      },
      {
        name: 'classify',
        path: '/musicHall/classify',
        component: classify,
        menuName: '分类'
      },
      {
        name: 'radio',
        path: '/musicHall/radio',
        component: radio,
        menuName: '电台'
      },
      {
        name: 'video',
        path: '/musicHall/video',
        component: video,
        menuName: '视频'
      }
    ]
  }
]

export default hallRouter
