import React from 'react'
import { Avatar, Popover } from 'antd'
import { getUser } from '../../js/utils'
const user = JSON.parse(getUser())

const content = (props) => {
    
    return (
        <div className='user-pop-content'>
            <p>个人信息</p>
            <p onClick={() => props()}>退出登录</p>
        </div>
    )
}
function Index() {
    let logout = () => {
        console.log(logout)
    }
    return (
        <Popover
            className='user-header'
            content={content(logout)}
            placement='bottomLeft'
            overlayStyle={{ width: 100 }}
        >
            <span className='name-user-header'>
                hi,{user.name}
            </span>
            <Avatar size={30} icon="user" />
        </Popover>
    )
}

export default Index