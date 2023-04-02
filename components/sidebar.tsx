import React, { ReactNode, useState } from "react";
import styles from './sidebar.module.css';

type Props = {
  icons: JSX.Element[];
  bottomIcons: JSX.Element[];
};

const Sidebar = ({ icons, bottomIcons }: Props) => {
  const [selectedIconIndex, setSelectedIconIndex] = useState<number | null>(0);

  const handleIconClick = (iconIndex: number) => {
    setSelectedIconIndex(iconIndex);
  };
  
  const bottomIconsStartIndex = icons.length;

  return(
    <div className={styles.sidebar}>
        <div className={styles.iconsContainer}>
            {/* Create div icons using map function with unique key as index */}
            {icons.map((icon, index) => (
              // Pass function to icons to update selected icon index for style change
              <button
                key={index}
                className={`${styles.icon} ${selectedIconIndex === index ? styles.selectedIcon : ''}`}
                onClick={() => handleIconClick(index)}
                type="button"
                disabled={selectedIconIndex === index}
              >
                {React.cloneElement(icon, { isSelected: selectedIconIndex === index })}
              </button>
        ))}
        </div>

        <div className={styles.bottomIconsContainer}>
            {bottomIcons.map((icon, index) => (
              <button
                key={bottomIconsStartIndex + index}
                className={`${styles.icon} ${selectedIconIndex === bottomIconsStartIndex + index ? styles.selectedIcon : ''}`}
                onClick={() => handleIconClick(bottomIconsStartIndex + index)}
                type="button"
                disabled={selectedIconIndex === bottomIconsStartIndex + index}
              >
                {React.cloneElement(icon, { isSelected: selectedIconIndex === index })}
              </button>
            ))}
        </div>
    </div>
  )
};

export default Sidebar;