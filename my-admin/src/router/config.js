import AsyncComponent from '../components/AsyncComponent'
const routers = [
    {
        component: 'dashboard', icon: 'bank', title:'首页', key: '0',
    },
    {
        title:'透明修', icon: 'mail', key: '1',
        children: [
            {
                title: '询价记录',
                icon: null,
                component: 'one'
            }
        ]
    },
    {
        component: 'two', icon: 'mail', title:'这个是二', key: '2'
    },
    {
        title: '设置',
        children: [
            {
                title: '这个是设置',
                icon: null,
                component: 'setting'
            }
        ]
    }
]
const pages = routers.reduce((p, route) => {
    let fileName
    if("children" in route && route.children.length > 0) {
        route.children.forEach((menu) => {
            fileName = menu.component
            const page = AsyncComponent(() => import(`../pages/${fileName}`))
            p[fileName] = {
                page
            }
        })
    } else {
        fileName = route.component
        const page = AsyncComponent(() => import(`../pages/${fileName}`))
        p[fileName] = {
            page
        }
    }
    return p
}, {})
export {routers, pages}
