import React from "react";
import Icon from './icon';
import Sidebar from './sidebar';

const SiteSidebar = () => {
  return(
    <Sidebar 
      icons={[
        <Icon src='/images/home-icon.svg' alt='Home' width={35} height={35} path='/'/>,
        <Icon src='/images/profile-icon.svg' alt="Profile" width={35} height={35} path='patient'/>,
        <Icon src='/images/chat-icon.svg' alt="Messages" width={35} height={35} path='messages'/>,
      ]} 
      bottomIcons={[
        <Icon src='/images/gear-icon.svg' alt="Settings" width={35} height={35} path='settings'/>,
      ]}
    />
  )
}

export default SiteSidebar;