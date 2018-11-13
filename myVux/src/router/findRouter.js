const find = () => import(/* webpackChunkName: "findRouter" */ '../views/musicFind/find.vue')

const findRouter = [
  {
    name: 'find',
    path: '/musicFind/find',
    component: find,
    menuName: '发现'
  }
]

export default findRouter
