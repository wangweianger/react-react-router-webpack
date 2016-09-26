import React from 'react'
import { render } from 'react-dom'
import { Router,hashHistory} from 'react-router'

//公用样式文件
require('./assets/common/css/base.scss'); 
// commonjsx 样式文件
require('./commonjsx/commonjsx.scss'); 

// 路由配置
const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('./app'),
    childRoutes: [
      require('./components/user/route'),
      require('./components/another/route'),
    ]
  }]
}

// 渲染界面
render((
  <Router
    history={hashHistory} 
    routes={rootRoute}
  />
), document.getElementById('app'))
