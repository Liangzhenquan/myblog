import React from 'react';
import { Layout, Button, Tabs, message } from 'antd'
import SideBar from '../components/layout/siderbar'
import HeadUser from '../components/layout/headUser'
import '../styles/themes.less'
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;
message.config({
    duration: 2,
    maxCount: 2,
  });
function Home(props) {
    return (
        <Layout id='layout'>
            <Sider>
                <div className="logo">
                    Admin
           </div>
                <SideBar match={props.match} />
            </Sider>
            <Layout>
                <Header>
                  {/* <TopNav /> */}
                  <HeadUser />
                </Header>
                <Content>
                    {props.children}
                </Content>
                <Footer>
                    created by liang at 2019.10.11
                </Footer>
            </Layout>
        </Layout>
    )
}
export default Home