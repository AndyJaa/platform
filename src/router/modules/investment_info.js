import Layout from '@/layout'

export default [
    {
        path: '/investmentInfoIndex/detail',
        component: Layout,
        meta: {
            title: '招商记录',
            icon: 'report'
        },
        children: [
            {
                path: '',
                name: 'investmentInfoIndexDetail',
                component (resolve) {
                    require([ '@/views/investment_info/empty' ], resolve);
                },
                meta: {
                    title: '招商记录',
                    sidebar: false,
                    breadcrumb: false,
                    activeMenu: '/investmentInfoIndex/detail'
                }
            }
        ]
    }
]
