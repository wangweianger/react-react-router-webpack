import React from 'react'
import { render } from 'react-dom'
import { Router,hashHistory,browserHistory} from 'react-router'


//公用样式文件
require('./assets/common/css/base.scss'); 
// commonjsx 样式文件
require('./commonjsx/commonjsx.scss'); 

// 配置路由渲染界面
const rootRoute = [
    {
        path: '/',
        // component: require('./app'),   //同步加载
        // 异步加载
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('./app'))
            })
        },
        // 异步加载
        indexRoute: { 
          getComponent(nextState, cb) {
              require.ensure([], (require) => {
                  cb(null, require('./components/home/Home'))
              })
          }
        },
        //  异步加载
        getChildRoutes(location,callback) {
            require.ensure([], function (require) {
              callback(null, [
                  require('./components/another/route'),
                  require('./components/user/route'),
              ])
            })
        }
    }
]

render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), document.getElementById('app'))



