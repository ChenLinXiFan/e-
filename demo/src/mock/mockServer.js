import Mock from 'mockjs'
import data from './data.json'

// 映射路由
Mock.mock('/api/menus', {
  code: 0,
  data: data.menus
})
Mock.mock('/api/datas', {
  code: 0,
  data: data.datas
})
Mock.mock('/api/surprise', {
  code: 0,
  data: data.surprise
})
