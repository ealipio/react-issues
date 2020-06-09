import React from 'react';

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const LayoutComp = ({ children }) => {
  return (
    <Layout className="layout">
      <Header style={{ color: '#FFF', fontWeight: 'bold', fontSize: 25 }}>
        Issue Finder <span style={{fontSize: 15, color: '#bbb'}}>v1.0</span>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        cod3a ©2020 Created by Eisson Alipio
      </Footer>
    </Layout>
  );
};

export default LayoutComp;
