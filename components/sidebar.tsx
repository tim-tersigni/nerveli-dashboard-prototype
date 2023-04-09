import React from "react";
import styles from "./sidebar.module.css";
import Icon from "./icon";
import Link from "next/link";
import { useRouter } from "next/router";

type IconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  path: string;
};

const Sidebar = () => {
  const router = useRouter();

  const icons: IconProps[] = [
    { src: "/images/home-icon.svg", alt: "Home", width: 35, height: 35, path: "/" },
    { src: "/images/profile-icon.svg", alt: "Profile", width: 35, height: 35, path: "/patient" },
    { src: "/images/chat-icon.svg", alt: "Messages", width: 35, height: 35, path: "/messages" },
    { src: "/images/gear-icon.svg", alt: "Settings", width: 35, height: 35, path: "/settings" },
  ];

  return (
    <div className={styles.sidebar}>
      {icons.map((icon: IconProps) => {
        const isSelected = router.asPath === icon.path;
        return (
          <Link className={icon.alt === "Settings" ? styles.bottomIcon : ''} href={icon.path}>
            <Icon
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              path={icon.path}
              isSelected={isSelected}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
