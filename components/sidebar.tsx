import React, { ReactNode } from "react";
import styles from './sidebar.module.css';

type Props = {
  icons: JSX.Element[];
  bottomIcons: JSX.Element[];
};

const Layout = ({ icons, bottomIcons }: Props) => {
  return(
    <div className={styles.sidebar}>
        <div className={styles.iconsContainer}>
            {/* Create div icons using map function with unique key as index */}
            {icons.map((icon, index) => (
            <div key={index} className={styles.icon}>
                {icon}
            </div>
            ))}
        </div>

        <div className={styles.bottomIconsContainer}>
            {bottomIcons.map((icon, index) => (
            <div key={index} className={styles.icon}>
                {icon}
            </div>
            ))}
        </div>
    </div>
  )
};

export default Layout;