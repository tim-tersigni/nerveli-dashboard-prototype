import React from 'react';
import styles from './icon.module.css';

type IconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  path: string;
  isSelected: boolean;
  onClick?: () => void;
};

const Icon = ({ src, alt, width, height, path, isSelected, onClick }: IconProps) => {
  const activeStyle = isSelected ? styles.active : '';

  return (
    <div className={`${styles.icon} ${activeStyle}`} onClick={onClick}>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Icon;
