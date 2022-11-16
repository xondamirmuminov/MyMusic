import React from 'react';
import { Divider, Menu, Layout } from 'antd';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MAIN_ROUTES } from '../../routes';

const { Sider } = Layout;

export default function Sidebar() {
  const location = useLocation();

  return (
    <Sider breakpoint="lg" collapsedWidth="80" className="custom-sidebar br-1" width="250">
      <div className="sidebar-inner-wrapper">
        <Link to="/profile" className="profile">
          <div className="profile-image mb-2">
            {/* <img src={defaultUser} alt="Profile" /> */}
          </div>
          <h4>MyMusic</h4>
        </Link>
        <Divider style={{ margin: '3px 5px' }} />
        <Menu mode="inline" id="sidebar-menu" selectedKeys={[location.pathname]}>
          {MAIN_ROUTES.map((item: any) => {
            const { icon, path, title } = item;
            return (
              <Menu.Item key={path} className="sidebar-item" icon={icon}>
                <NavLink to={path}>{title}</NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    </Sider>
  );
}
