// Wraps all other components on each page. 
// For sitewide styling.

import React, { ReactNode } from "react";
import styles from './layout.module.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return(
    <div className={styles.container}>
      {children}
    </div>
  ) 
};

export default Layout;