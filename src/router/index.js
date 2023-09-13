import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login.vue'
import layout from '@/views/layout/layout.vue'
import home from '@/views/home/home.vue'
import menu from '@/views/system/menu/menu.vue'
import user from '@/views/system/user/user.vue'
import role from '@/views/system/role/role.vue'
import { getToken } from '@/utils/auth'
Vue.use(Router)
const routes = [
    {
        path: '/',
        component: layout,
        redirect: '/home',
        name: 'home',
        meta: {
            title: '首页'
        },
        children: [{
            path: '/home',
            component: home,
        },

        ]
    },
    {
        path: '/system',
        component: layout,
        meta: {
            title: '系统管理'
        },
        children: [
            {
                path: 'menu',
                component: menu,
                meta: {
                    title: '菜单管理'
                }
            },
            {
                path: 'user',
                component: user,
                meta: {
                    title: '用户管理'
                }
            }, {
                path: 'role',
                component: role,
                meta: {
                    title: '角色管理'
                }
            }
        ]
    },
    {
        path: '/login',
        component: login
    },
];
const router = new Router({
    mode: 'history',
    routes
});
function inWhiteList (toPath) {
    const whiteList = ['/login', '/register', '/404']
    const path = whiteList.find((value) => {
        // 使用正则匹配
        const reg = new RegExp('^' + value)
        return reg.test(toPath)
    })
    return !!path
}

router.beforeEach((to, from, next) => {
    const token = getToken();
    if (inWhiteList(to.path)) {
        next()
    } else {
        //用户已登录
        if (token) {
            next()
        } else {
            next(`/login`)
        }
    }
});

export default router;