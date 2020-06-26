import React, { useEffect, useState } from 'react';
import { TopBar, IconableAction } from '@shopify/polaris';

import { useLogout, useGetUser } from '../../hooks';


const UserMenu: React.FC = () => {
  const { logout } = useLogout();
  const { getUser, queryResults } = useGetUser();


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

  useEffect(() => { getUser(); }, []);

  return (
    <TopBar.UserMenu
      actions={actions}
      name={queryResults?.data?.getUser.name ? queryResults.data?.getUser.name : ''}
      detail="My Store"
      initials="D"
      open={userMenu}
      onToggle={handleUserMenu}
    />
  );
};

export default UserMenu;
