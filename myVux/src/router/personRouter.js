const center = () => import(/* webpackChunkName: "personRouter" */ '../views/personCenter/person.vue')

const personRouter = [
  {
    name: 'center',
    path: '/personCenter/person',
    component: center,
    menuName: '我的'
  }
]

export default personRouter
