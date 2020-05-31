import React, { useState } from 'react';
import { TopBar } from '@shopify/polaris';

const userMenuActions = [
  {
    items: [{ content: 'Community forums' }],
  },
];


const UserMenu: React.FC = () => {
  const [userMenu, setUserMenu] = useState(false);

  const handleUserMenu = () => {
    setUserMenu(!userMenu);
  };

  return (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Dharma"
      detail="My Store"
      initials="D"
      open={userMenu}
      onToggle={handleUserMenu}
    />
  );
};

export default UserMenu;
