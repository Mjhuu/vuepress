module.exports = {
    // base: './',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    port: '80',
    theme: 'yuu',
    markdown: {
        lineNumbers: true, // 显示行号
    },
    title: '纬领项目文档',
    cache: false,
    description: '纬领项目操作文档',
    themeConfig: {
        yuu: {
            disableDarkTheme: false,
            colorThemes: ['red', 'blue', 'purple']
        },
        logo: '/logo.png',
        /*侧边栏开始*/
        sidebarDepth: 2, // 最大深度
        sidebar: {
            /*"/guide/": [
                '/guide/'
            ],*/
            "/house/": [
                ['/house/web/', '地推系统前端'],
                ['/house/back/', '地推系统后端']
            ],
            "/block/": [
                {
                    title: '金联物通',
                    collapsable: false,
                    children: [
                        { title: '前端', path:'/block/web/'},
                        { title: '后端', path:'/block/back/'}
                    ]
                }
            ],
            "/explorer/": [
                {
                    title: '区块链浏览器',
                    collapsable: false,
                    children: [
                        { title: '前端', path:'/explorer/web/'},
                        { title: '后端', path:'/explorer/back/'}
                    ]
                }
            ],
            "/job/": [
                {
                    title: '纬领工作平台',
                    collapsable: false,
                    children: [
                        { title: '前端', path:'/job/web/'},
                        { title: '后端', path:'/job/back/'}
                    ]
                }
            ],
            "/weblink_back/": [
                {
                    title: '官网后台',
                    collapsable: false,
                    path: '/weblink_back/web/'
                }
            ],
            "/cloud/": [
                {
                    title: '云盘',
                    collapsable: false,
                    children: [
                        { title: 'web', path:'/cloud/web/'},
                        { title: '客户端', path:'/cloud/client/'}
                    ]
                }
            ],
        },
        /*侧边栏结束*/

        /*上方导航开始*/
        nav: [
            {
                text: '地产情报系统',
                items: [
                    { text: '前端', link: '/house/web/' },
                    { text: '后端', link: '/house/back/' }
                ]
            },
            {
                text: '金联物通',
                items: [
                    { text: '前端', link: '/block/web/' },
                    { text: '后端', link: '/block/back/' },
                    { text: '线上地址', link: 'http://chain.weblinkon.com:3000' },
                ]
            },
            {
                text: '区块链浏览器',
                items: [
                    { text: '前端', link: '/explorer/web/' },
                    { text: '后端', link: '/explorer/back/' },
                    { text: '线上地址', link: 'http://chain.weblinkon.com/' },
                ]
            },
            {
                text: '纬领工作平台',
                items: [
                    { text: '前端', link: '/job/web/' },
                    { text: '后端', link: '/job/back/' },
                    { text: '线上地址', link: 'http://chain.weblinkon.com:7003' },
                ]
            },
            {
                text: '官网后台',
                link: '/weblink_back/web/'
            },
            {
                text: '云盘',
                items: [
                    { text: 'web', link: '/cloud/web/' },
                    { text: '客户端', link: '/cloud/client/' },
                ]
            },
        ],
        /*上方导航结束*/
    }
}
