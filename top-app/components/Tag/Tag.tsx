import React from 'react';
import styles from './Tag.module.css';
import cn from 'classnames';
import { TagProps } from './Tag.props';

const Tag = ({
  children,
  size = 's',
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === 's',
        [styles.medium]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.primary]: color === 'primary',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.gray]: color === 'gray',
      })}
      {...props}
    >
      {href ? <a href={href}>children</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
