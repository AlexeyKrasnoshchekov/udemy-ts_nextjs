import React from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';

const Footer = ({ ...props }: FooterProps) => {
  return <div {...props}>Footer</div>;
};

export default Footer;
