import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import { HeaderProps } from './Header.props';

const Header = ({ ...props }: HeaderProps) => {
  return <div {...props}>Header</div>;
};

export default Header;
