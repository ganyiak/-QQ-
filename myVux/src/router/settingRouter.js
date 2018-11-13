const setting = () => import(/* webpackChunkName: "hallRouter" */ '../views/setting/setting.vue')

const settingRouter = [
  {
    name: 'setting',
    path: '/setting/setting',
    component: setting,
    menuName: '设置'
  }
]

export default settingRouter
