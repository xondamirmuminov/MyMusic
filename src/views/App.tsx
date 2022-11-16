import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';

import { StyledApp } from './App.style';
import { MAIN_ROUTES } from '../routes';
import Sidebar from '../components/Sidebar/Sidebar';

const { Content } = Layout;
function App() {
  return (
    <StyledApp>
      <Layout>
        <Sidebar />
        <Layout id="main">
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 'calc(100vh - 48px)' }}
            >
              <Suspense fallback="Loading...">
                <Routes>
                  {MAIN_ROUTES.map((item) => {
                    const { path, element: Component } = item;
                    return <Route key={path} path={path} element={<Component />} />;
                  })}
                  <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
              </Suspense>
            </div>
          </Content>
        </Layout>
      </Layout>
    </StyledApp>
  );
}

export default App;