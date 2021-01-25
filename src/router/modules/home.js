import Layout from '@/layout'

export default {
    path: '/',
    component: Layout,
    name: '首页',
    meta: {
        title: '首页',
        icon: '',
    },
    children: [
        // {
        //     path: 'home',
        //     name: '首页',
        //     component: () => import('@/views/home'),
        //     meta: {
        //         title: '首页',
        //         sidebar: false,
        //         breadcrumb: false,
        //         activeMenu: '/home'
        //     }
        // },
        {
            path: '/home/empty',
            name: 'detail',
            component (resolve) {
                require([ '@/views/home/empty' ], resolve);
            },
            meta: {
                title: '详情页面',
                sidebar: false
            }
        }
    ]
}
