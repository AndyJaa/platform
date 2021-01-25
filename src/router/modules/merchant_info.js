import Layout from '@/layout'

export default [
    {
        path: '/merchantManageIndex/baseInfo',
        component: Layout,
        meta: {
            title: '企业基础信息',
            icon: 'baseInfo'
        },
        children: [
            {
                path: '',
                name: 'merchantManageIndexBaseInfo',
                component (resolve) {
                    require([ '@/views/merchant_info/empty' ], resolve);
                },
                meta: {
                    title: '企业基础信息',
                    sidebar: false,
                    breadcrumb: false,
                    activeMenu: '/merchantManageIndex/baseInfo'
                }
            }
        ]
    },
    {
        path: '/merchantManageIndex/linkman',
        component: Layout,
        meta: {
            title: '业务联系人',
            icon: 'linkMan'
        },
        children: [
            {
                path: '',
                name: 'merchantManageIndexLinkMan',
                component (resolve) {
                    require([ '@/views/merchant_info/empty' ], resolve);
                },
                meta: {
                    title: '业务联系人',
                    sidebar: false,
                    breadcrumb: false,
                    activeMenu: '/merchantManageIndex/linkman'
                }
            }
        ]
    },
    {
        path: '/merchantManageIndex/affairs',
        component: Layout,
        meta: {
            title: '企业财务信息',
            icon: 'affairs'
        },
        children: [
            {
                path: '',
                name: 'merchantManageIndexAffairs',
                component (resolve) {
                    require([ '@/views/merchant_info/empty' ], resolve);
                },
                meta: {
                    title: '企业财务信息',
                    sidebar: false,
                    breadcrumb: false,
                    activeMenu: '/merchantManageIndex/affairs'
                }
            }
        ]
    },
    {
        path: '/merchantManageIndex/texpayer',
        component: Layout,
        meta: {
            title: '企业纳税人资格',
            icon: 'texpayer'
        },
        children: [
            {
                path: '',
                name: 'merchantManageIndexTexpayer',
                component (resolve) {
                    require([ '@/views/merchant_info/empty' ], resolve);
                },
                meta: {
                    title: '企业纳税人资格',
                    sidebar: false,
                    breadcrumb: false,
                    activeMenu: '/merchantManageIndex/texpayer'
                }
            }
        ]
    },
    {
        path: '/merchantManageIndex/logistics',
        component: Layout,
        meta: {
            title: '企业仓储物流信息',
            icon: 'logistics'
        },
        children: [
            {
                path: '',
                name: 'merchantManageIndexLogistics',
                component (resolve) {
                    require([ '@/views/merchant_info/empty' ], resolve);
                },
                meta: {
                    title: '企业仓储物流信息',
                    sidebar: false,
                    breadcrumb: false,
                    activeMenu: '/merchantManageIndex/logistics'
                }
            }
        ]
    },
    {
        path: '/merchantManageIndex/professional',
        component: Layout,
        meta: {
            title: '企业业务信息',
            icon: 'professional'
        },
        children: [
            {
                path: '',
                name: 'merchantManageIndexProfessional',
                component (resolve) {
                    require([ '@/views/merchant_info/empty' ], resolve);
                },
                meta: {
                    title: '企业业务信息',
                    sidebar: false,
                    breadcrumb: false,
                    activeMenu: '/merchantManageIndex/professional'
                }
            }
        ]
    },
    {
        path: '/merchantManageIndex/otherFile',
        component: Layout,
        meta: {
            title: '其他文件',
            icon: 'otherFile'
        },
        children: [
            {
                path: '',
                name: 'merchantManageIndexOtherFile',
                component (resolve) {
                    require([ '@/views/merchant_info/empty' ], resolve);
                },
                meta: {
                    title: '其他文件',
                    sidebar: false,
                    breadcrumb: false,
                    activeMenu: '/merchantManageIndex/otherFile'
                }
            }
        ]
    }
]


// export default {
//     path: '/merchantManageIndex',
//     component: Layout,
//     name: 'merchantManageIndex',
//     meta: {
//         title: '商户资料',
//         icon: ''
//     },
//     children: [
//         {
//             path: '/merchantManageIndex/baseInfo',
//             name: 'merchantManageIndexBaseInfo',
//             component: () => import(/* webpackChunkName: 'breadcrumb_example' */ '@/views/merchant_info/empty'),
//             meta: {
//                 title: '企业基础信息',
//                 icon: 'sidebar-breadcrumb'
//             }
//         },
//         {
//             path: '/merchantManageIndex/linkman',
//             name: 'merchantManageIndexLinkMan',
//             component: () => import(/* webpackChunkName: 'breadcrumb_example' */ '@/views/merchant_info/empty'),
//             meta: {
//                 title: '业务联系人',
//                 icon: 'sidebar-breadcrumb'
//             }
//         },
//         {
//             path: '/merchantManageIndex/affairs',
//             name: 'merchantManageIndexAffairs',
//             component: () => import(/* webpackChunkName: 'breadcrumb_example' */ '@/views/merchant_info/empty'),
//             meta: {
//                 title: '企业财务信息',
//                 icon: 'sidebar-breadcrumb'
//             }
//         },
//         {
//             path: '/merchantManageIndex/texpayer',
//             name: 'merchantManageIndexTexpayer',
//             component: () => import(/* webpackChunkName: 'breadcrumb_example' */ '@/views/merchant_info/empty'),
//             meta: {
//                 title: '企业纳税人资格',
//                 icon: 'sidebar-breadcrumb'
//             }
//         },
//         {
//             path: '/merchantManageIndex/logistics',
//             name: 'merchantManageIndexLogistics',
//             component: () => import(/* webpackChunkName: 'breadcrumb_example' */ '@/views/merchant_info/empty'),
//             meta: {
//                 title: '企业仓储物流信息',
//                 icon: 'sidebar-breadcrumb'
//             }
//         },
//         {
//             path: '/merchantManageIndex/professional',
//             name: 'merchantManageIndexProfessional',
//             component: () => import(/* webpackChunkName: 'breadcrumb_example' */ '@/views/merchant_info/empty'),
//             meta: {
//                 title: '企业业务信息',
//                 icon: 'sidebar-breadcrumb'
//             }
//         },
//         {
//             path: '/merchantManageIndex/otherFile',
//             name: 'merchantManageIndexOtherFile',
//             component: () => import(/* webpackChunkName: 'breadcrumb_example' */ '@/views/merchant_info/empty'),
//             meta: {
//                 title: '其他文件',
//                 icon: 'sidebar-breadcrumb'
//             }
//         },
//     ]
// }
