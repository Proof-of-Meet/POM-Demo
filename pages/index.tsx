import React from 'react';
import { Divider, Layout, Menu, Typography, theme } from 'antd';
import Profile from '../components/Profile';
import ContractRead from '../components/ContractRead';
import ContractWrite from '../components/ContractWrite';
import Link from 'next/link';
import Image from 'next/image';

const { Content, Footer } = Layout;
export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px' }}>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight: '100vh',
            padding: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              width: '600px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <Typography.Title level={1} style={{ textAlign: 'center' }}>
              Welcome to POM Demo Page
            </Typography.Title>
            <Divider />
            <Typography.Title level={1} style={{ margin: 0 }}>
              Wallet Connect
            </Typography.Title>
            <Profile />
            <Divider />
            <Typography.Title level={1} style={{ margin: 0 }}>
              Contract Read
            </Typography.Title>
            <ContractRead />
            <Divider />
            <Typography.Title level={1} style={{ margin: 0 }}>
              Contract Write
            </Typography.Title>
            <ContractWrite />
            <Divider />
            <Typography.Title level={1} style={{ margin: 0 }}>
              DeepLink
            </Typography.Title>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <a
                href="https://metamask.app.link/send/0x5A2609D698DE041B1Ba77139A4229c8a161dDd9e?value=1e16
"
              >
                https://metamask.app.link/send/0x5A2609D698DE041B1Ba77139A4229c8a161dDd9e?value=1e16
              </a>
              <div>
                <Image
                  src={'/qreth.png'}
                  alt="qr"
                  width={300}
                  height={300}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        POM Demo Page ©2023 Created by Jaden
      </Footer>
    </Layout>
  );
}
