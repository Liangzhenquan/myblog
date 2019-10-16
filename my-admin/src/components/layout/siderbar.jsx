import React from 'react'
import { Menu, Icon } from 'antd';
import { routers } from '../../router/config'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu

function Usage(props) {
    const { pathname } = window.location
    let  selectedKeys = [pathname]
    if(pathname === '/') {
        selectedKeys = ['/dashboard']
    }
    return (
        <Menu 
          mode='inline'
          defaultSelectedKeys={selectedKeys}
          >
            {
                routers.map((router) => (
                    router.children ?
                        <SubMenu
                            title={
                                <span>
                                    {
                                        router.icon && <Icon type={router.icon} />
                                    }
                                    <span>
                                        {router.title}
                                    </span>
                                </span>
                            }
                            key={router.title}
                        >
                            {
                                router.children.map((r) => (
                                    <Menu.Item
                                        key={`/${r.component}`}
                                    >
                                        <Link to={r.component}>
                                            {r.title}
                                        </Link>
                                    </Menu.Item>
                                ))
                            }
                        </SubMenu>
                        :
                        <Menu.Item key={`/${router.component}`}>
                            <Link to={router.component}>
                                {router.icon && <Icon type={router.icon} />}
                                {router.title}
                            </Link>
                        </Menu.Item>
                ))
            }
        </Menu>
    )
}
export default Usage