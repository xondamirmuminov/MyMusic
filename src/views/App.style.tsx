/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';
import { COLORS, STYLING_CONFIGS } from '../constants';
import { pxToRem } from '../utils';

export const StyledApp = styled.main `
  /* ----- Main Layout --- */
  .custom-sidebar {
    background-color: ${COLORS.lightGrey};
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    width: ${pxToRem(STYLING_CONFIGS.SIDEBAR_WIDTH)};
    z-index: 1000;
  }
  .ant-layout-sider-children{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  #main {
    background-color: #000000;
    padding-left: ${pxToRem(STYLING_CONFIGS.SIDEBAR_WIDTH)};
  }
  .profile {
    text-align: center;
    padding: ${pxToRem(30)} ${pxToRem(10)};
  }

  .sidebar-inner-wrapper {
    padding: ${pxToRem(10)} ${pxToRem(16)};
  }
  .profile-image img{
    width: ${pxToRem(44)};
    height: ${pxToRem(44)};
    object-fit: cover;
    border-radius: 50%;
    background-color: #E7E9EB;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: ${pxToRem(7)};
  }
  #sidebar-menu {
    background-color: ${COLORS.lightGrey};
    border: none;
  }
  .sidebar-item {
    display: flex;
    align-items: center;
    padding: ${pxToRem(10)} !important; 
    color: ${COLORS.text};
    border-radius: ${pxToRem(5)};;
    font-family: 'Roboto-Medium';
    font-style: normal;
    font-weight: normal;
    font-size: ${pxToRem(16)};;
    line-height: ${pxToRem(18)};;
  }

  .ant-menu-sub.ant-menu-inline {
    background-color: #eee;
  }
  .sidebar-item .ant-menu-item-icon, .ant-menu-submenu-title svg {
    width: ${pxToRem(30)} !important;
    min-width: ${pxToRem(30)};
    height: ${pxToRem(30)};
    min-height: ${pxToRem(30)}!important;
  }
  #sidebar-menu .sidebar-item.ant-menu-item-selected svg {
    fill: ${COLORS.main} !important;
  }
  .submenu-item {
    padding-left: ${pxToRem(10)} !important;
    display: flex;
    align-items: center;
  }
  .submenu-item .ant-menu-item-icon, .ant-menu-item .ant-menu-item-icon {
    width: ${pxToRem(24)} !important;
    min-width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    min-height: ${pxToRem(24)} !important;
  }
  .ant-menu-submenu-title {
    padding-left: ${pxToRem(10)} !important;
    padding-top: ${pxToRem(10)};
    padding-bottom: ${pxToRem(10)};
    font-family: "Roboto-medium";
    font-size: ${pxToRem(14)};
    display: flex;
    align-items: center;
  }
  #sidebar-menu .sidebar-item.ant-menu-item-selected::after {
    border-right: none;
  }

  /* ---- Collapsed screen ----- */
  .ant-layout-sider-collapsed + #main {
    padding-left: ${pxToRem(80)};
  }
  .ant-layout-sider-collapsed .profile h4 {
    display: none;
  }
  .ant-layout-sider-collapsed #sidebar-menu {
    width: 100%;
  }
  .ant-layout-sider-collapsed .profile {
    padding: ${pxToRem(30)} 0;
  }
  .ant-layout-sider-collapsed .language-list {
    margin: auto ${pxToRem(12)} ${pxToRem(20)};
  }
  .ant-layout-sider-collapsed .language-list .ant-select-arrow {
    display: none;
  }
  .ant-layout-sider-collapsed .ant-select-selection-item {
    padding-right: 0 !important;
  }
  .ant-layout-sider-collapsed .ant-select-selection-item span {
    display: none;
  }
  .ant-layout-sider-collapsed .ant-select-selection-item .flag {
    margin: 0;
  }
  .ant-layout-sider-collapsed .ant-menu-submenu-title > span {
    display: none;
  }
`;