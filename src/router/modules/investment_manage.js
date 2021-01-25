import Layout from '@/layout'

export default {
    path: '/investmentManageIndex',
    component: Layout,
    name: 'investmentManageIndex',
    meta: {
        title: '招商管理',
        icon: ''
    },
    children: [
        {
            path: '/investmentManageIndex/detail',
            name: 'investmentManageIndexDetail',
            component (resolve) {
                require([ '@/views/investment_manage/empty' ], resolve);
            },
            meta: {
                title: '详情',
                icon: 'sidebar-breadcrumb'
            }
        }
    ]
}
