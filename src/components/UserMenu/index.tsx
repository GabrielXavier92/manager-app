import React, { useState } from 'react';
import { TopBar, IconableAction } from '@shopify/polaris';

import useLogout from '../../hooks/useLogout';


const UserMenu: React.FC = () => {
  const { logout } = useLogout();


  const items: IconableAction[] = [
    { content: 'Sair da conta', onAction: () => logout() },
  ];

  const actions = [
    {
      items,
    },
  ];

  const [userMenu, setUserMenu] = useState(false);

  const handleUserMenu = () => {
    setUserMenu(!userMenu);
  };

  return (
    <TopBar.UserMenu
      actions={actions}
      name="Dharma"
      detail="My Store"
      initials="D"
      open={userMenu}
      onToggle={handleUserMenu}
    />
  );
};

export default UserMenu;
