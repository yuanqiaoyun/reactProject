import React from 'react';
import './App.css';
import { Layout, Slider } from 'antd';
const {Header,Content,Footer,Sider} = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div>111</div>
        </Header>
        <Layout>
          <Sider>sider</Sider>
          <Content>Content</Content>
        </Layout>
        
        <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
