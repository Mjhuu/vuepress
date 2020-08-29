module.exports = {
    // base: './',
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        /*侧边栏开始*/
        sidebarDepth: 2, // 最大深度
        sidebar: {
            "/guide/": [
                '/guide/'
            ],
            "/language/": [
                {
                    title: '语言',
                    collapsable: false,
                    children: [
                        { title: '中文', path:'/language/chinese/'},
                        { title: '英文', path:'/language/english/'}
                    ]
                }
            ]
        },
        /*侧边栏结束*/
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'GuideHtml', link: '/guideHtml/' },
            {
                text: 'language',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'External', link: 'https://www.baidu.com' },
        ]
    }
}
