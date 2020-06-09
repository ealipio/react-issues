import React from 'react';

import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const LayoutComp = ({ children }) => {
  return (
    <Layout className="layout">
      <Header style={{ color: '#FFF', fontWeight: 'bold', fontSize: 25 }}>
        <GithubOutlined style={{marginRight: 10}}/>
        Issue Finder <span style={{ fontSize: 15, color: '#bbb' }}>v1.0</span>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, height: '95vh' }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', fontSize: 10 }}>
        cod3a ©2020 Created by Eisson Alipio
      </Footer>
    </Layout>
  );
};

export default LayoutComp;
