import { ParagProps } from './P.props';
import React from 'react';
import styles from './P.module.css';
import cn from 'classnames';

const P = ({ children, size = 'm', className, ...props }: ParagProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === 's',
        [styles.medium]: size === 'm',
        [styles.large]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
