import React from 'react';
import { Divider, Layout, Menu, Typography, theme } from 'antd';
import Profile from '../components/Profile';
import ContractRead from '../components/ContractRead';
import ContractWrite from '../components/ContractWrite';
import Link from 'next/link';
import Image from 'next/image';
import DeepLink from '../components/DeepLink';
import ImageUpload from '../components/ImageUpload';

const { Content, Footer } = Layout;
export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Content style={{ padding: '20px' }}>
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
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <Typography.Title level={1} style={{ textAlign: 'center' }}>
              Welcome to POM Demo Page
            </Typography.Title>
            <Divider />
            <Typography.Title level={1}>Wallet Connect</Typography.Title>
            <Profile />
            <Divider />
            <Typography.Title level={1}>Contract Read</Typography.Title>
            <ContractRead />
            <Divider />
            <Typography.Title level={1}>Contract Write</Typography.Title>
            <ContractWrite />
            <Divider />
            <Typography.Title level={1}>DeepLink</Typography.Title>
            <DeepLink />
            <Divider />
            <Typography.Title level={1}>Image Upload</Typography.Title>
            <ImageUpload />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        POM Demo Page ©2023 Created by Jaden
      </Footer>
    </Layout>
  );
}
