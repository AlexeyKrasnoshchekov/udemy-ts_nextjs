import React from 'react';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';

const Sidebar = ({ ...props }: SidebarProps) => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
