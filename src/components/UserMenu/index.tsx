import React, { useState } from 'react';
import { TopBar, IconableAction } from '@shopify/polaris';

import { useAuth } from '../../hooks';
import { useUserQuery } from '../../generated/graphql';

const UserMenu: React.FC = () => {
  const { useLogoutUser } = useAuth();
  const { logout } = useLogoutUser();
  const { data } = useUserQuery();


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
      name={data?.user.name ? data?.user.name : ''}
      detail="My Store"
      initials="D"
      open={userMenu}
      onToggle={handleUserMenu}
    />
  );
};

export default UserMenu;
