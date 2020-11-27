import React from 'react';
import './App.css';
import { Layout, Slider } from 'antd';
const {Header,Content,Footer,Sider} = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div style={{textAlign:"center"}}>欢迎来到QY线上练习管理系统</div>
        </Header>
        <Layout style={{minHeight:"83vh",backgroundColor:"#1890ff"}}>
          <Sider>这里是侧边的菜单栏</Sider>
          <Content>这里是内容区域
            <span><i className="iconfont icon-jiesan"></i></span>
          </Content>
        </Layout>
        <Footer>这里是底不的内容</Footer>
    </Layout>
    </div>
  );
}

export default App;
