import React, { useState, useEffect } from 'react';
import { Frame } from '@shopify/polaris';

import LeftMenu from '../../components/LeftMenu';
import Header from '../../components/Header';

import { useGetUser } from '../../hooks/useGetUser';

import { AuthRoutes } from '../../routes';

const DashBoard: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const { getUser } = useGetUser();

  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  useEffect(getUser, []);
  return (
    <Frame
      topBar={<Header onNavigationToggle={handleOpenMenu} />}
      navigation={<LeftMenu />}
      showMobileNavigation={menu}
      onNavigationDismiss={handleOpenMenu}
    >
      <AuthRoutes />
    </Frame>
  );
};

export default DashBoard;
