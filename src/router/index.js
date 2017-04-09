import Vue from 'vue';
import Router from 'vue-router';
import jwt from '../utils/jwt';
import App from '../App';
import Index from '../components/Index';
// import Product from '../views/Product';
// import Vip from '../views/product/Vip';
// import Vvip from '../views/product/Vvip';
// import Vvvip from '../views/product/Vvvip';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import ForgetPwd from '../components/auth/ForgetPwd';
import ChangePwd from '../components/auth/ChangePwd';
import Bind from '../components/auth/Bind';
import MyApp from '../components/myApp/MyApp';
import AppManage from '../components/myApp/AppManage';
import AppCont from '../components/myApp/AppCont';
import AppInfo from '../components/myApp/AppInfo';
import UserManage from '../components/myApp/UserManage';
// import HotUpdate from '../components/myApp/hotUpdate/HotUpdate';
import Patch from '../components/myApp/hotUpdate/Patch';
import Monitor from '../components/myApp/hotUpdate/Monitor';
// import Distribute from '../components/myApp/distribute/Distribute';
import Upload from '../components/myApp/distribute/Upload';
import SetAppInfo from '../components/myApp/distribute/SetAppInfo';
import UploadSuccess from '../components/myApp/distribute/UploadSuccess';
import Download from '../components/myApp/distribute/download';
import Manage from '../components/myApp/distribute/Manage';
import UDID from '../components/myApp/distribute/UDID';
import Statistics from '../components/myApp/statistics/Statistics';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: App,
    redirect: 'login',
    children: [
      { path: '/index', name: 'index', component: Index, meta: { title: 'RNKit云服务' } },
      { path: '/login', name: 'login', component: Login, meta: { title: '登录' } },
      { path: '/register', name: 'register', component: Register, meta: { title: '注册' } },
      { path: '/forgetPwd', name: 'forgetPwd', component: ForgetPwd, meta: { title: '忘记密码' } },
      { path: '/changePwd', name: 'changePwd', component: ChangePwd, meta: { title: '修改密码' } },
      { path: '/bind', name: 'bind', component: Bind, meta: { title: '绑定手机/邮箱' } },
      { path: '/myApp', name: 'myApp', component: MyApp, meta: { title: '我的应用' } },
      { path: '/myApp/:key',
        name: 'appManage',
        component: AppManage,
        // redirect: { name: 'appCont', params: { type: 'hotUpdate' } },
        meta: { title: '我的应用' },
        children: [
          { path: 'appCont/:type',
            name: 'appCont',
            component: AppCont,
            redirect: { name: 'appInfo' },
            meta: { title: 'App内容' },
            children: [
              { path: 'appInfo', name: 'appInfo', component: AppInfo, meta: { title: 'App信息' } },
              { path: 'patch', name: 'patch', component: Patch, meta: { title: '补丁下发' } },
              { path: 'monitor', name: 'monitor', component: Monitor, meta: { title: '实时监控' } },
              { path: 'upload', name: 'upload', component: Upload, meta: { title: '应用上传' } },
              { path: 'upload/setAppInfo', name: 'setAppInfo', component: SetAppInfo, meta: { title: '应用上传-设置信息' } },
              { path: 'upload/uploadSuccess', name: 'uploadSuccess', component: UploadSuccess, meta: { title: '应用上传-上传成功' } },
              { path: 'upload/download', name: 'download', component: Download, meta: { title: '应用上传-下载页' } },
              { path: 'manage', name: 'manage', component: Manage, meta: { title: '应用管理' } },
              { path: 'udid', name: 'udid', component: UDID, meta: { title: 'UDID' } },
              { path: 'statistics', name: 'statistics', component: Statistics, meta: { title: '流量统计' } },
              { path: 'userManage', name: 'userManage', component: UserManage, meta: { title: '用户管理' } },
            ],
          },
        /*children: [
          { path: 'hotUpdate',
            name: 'hotUpdate',
            component: AppCont,
            redirect: { name: 'patch' },
            meta: { title: '热更新' },
            children: [
              { path: 'appInfo', name: 'appInfo', component: AppInfo, meta: { title: 'App信息' } },
              { path: 'patch', name: 'patch', component: Patch, meta: { title: '补丁下发' } },
              { path: 'monitor', name: 'monitor', component: Monitor, meta: { title: '实时监控' } },
            ],
          },
          { path: 'distribute',
            name: 'distribute',
            component: AppCont,
            redirect: { name: 'upload' },
            meta: { title: '应用分发' },
            children: [
              { path: 'upload', name: 'upload', component: Upload, meta: { title: '应用上传' } },
              { path: 'upload/uploadSuccess',
                name: 'uploadSuccess',
                component: UploadSuccess,
                meta: { title: '应用上传-上传成功' },
              },
              { path: 'upload/download',
                name: 'download',
                component: Download,
                meta: { title: '应用上传-下载页' },
              },
              { path: 'manage', name: 'manage', component: Manage, meta: { title: '应用管理' } },
              { path: 'udid', name: 'udid', component: UDID, meta: { title: 'UDID' } },
            ],
          },
          { path: 'statistics',
            name: 'statistics',
            component: AppCont,
            meta: { title: '流量统计' },
            children: [
              { path: 'upload', name: 'upload', component: Statistics, meta: { title: '流量统计' } },
            ],
          },*/
        ],
      },
    ],
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (!jwt.checkAuth() && to.name !== 'login' && to.name !== 'index' && to.name !== 'register' && to.name !== 'forgetPwd') {
    next({ name: 'login' });
  } else {
    next();
  }
});

// 动态设置页面title
router.afterEach((to) => {
  document.title = `${to.meta.title} - React Native热更新-RNKit云服务`;
});

export default router;
