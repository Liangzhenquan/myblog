import React, { Component } from 'react'
import { setUser } from '../js/utils' 
import { message } from 'antd'
import axios from 'axios'
import Qs from 'qs'
import { loginUrl } from '../js/http'
import '../styles/login.less'

export default class Login extends Component {
    state = {
        userName: '',
        password: '',
        btnStatu: false
    }
    changeName = (e) => {
        this.setState({
            userName: e.target.value
        })
    }
    changePwd = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    login = async () => {
        const { userName, password } = this.state
        const data = {
            username: userName,
            password 
        }
        try {
           let res = await axios({
               method: 'post',
               url: loginUrl,
               data: Qs.stringify(data),
               headers: { "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8' }
           })
           const { status } = res
           const { code } = res.data
           console.log(res.data)
           switch(code) {
               case '0':
                   message.info(res.data.messages)
                   break;
               case '1':
                   setUser('admin', res.data)
                   window.location = '/'
                   break;
               default:
                   return
           }
           
        } catch(err) {
            console.log(err)
        }
        // setUser('admin', {
        //     userName: this.state.userName,
        //     password: this.state.password
        // })
        // window.location = '/'
    }
    render() {
        const { userName, password } = this.state
        return (
            <section className='login'>
                <div className="form-login">
                    <h2 className='title-login'>
                        登录
                    </h2>
                    <input 
                      className='common-input' 
                      type="text" placeholder='账号' 
                      value={userName} 
                      onChange={this.changeName}/>
                    <input 
                      className='common-input' 
                      type="password"
                      value={password}
                      placeholder='密码' 
                      onChange={this.changePwd}/>
                    <button className='btn-login' onClick={this.login}>登录</button>
                </div>
            </section>
        )
    }
}
