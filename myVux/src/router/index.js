
import personRouter from './personRouter'
import hallRouter from './hallRouter'
import findRouter from './findRouter'
const router = [
  {
    name: '我的',
    children: personRouter
  },
  {
    name: '音乐馆',
    children: hallRouter
  },
  {
    name: '发现',
    children: findRouter
  }
]

export default router
