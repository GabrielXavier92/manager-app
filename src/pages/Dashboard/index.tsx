import React, { useState, useEffect } from 'react';
import { Frame } from '@shopify/polaris';

import LeftMenu from '../../components/LeftMenu';
import Header from '../../components/Header';

import { useUser } from '../../hooks';

import { AuthRoutes } from '../../routes';

const DashBoard: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const { getUser } = useUser().useGetUser();

  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  const handleGetUser = () => {
    getUser();
  };

  useEffect(handleGetUser, []);
  return (
    <Frame
      topBar={<Header onNavigationToggle={handleOpenMenu} />}
      navigation={<LeftMenu onNavigationToggle={handleOpenMenu} />}
      showMobileNavigation={menu}
      onNavigationDismiss={handleOpenMenu}
    >
      <AuthRoutes />
    </Frame>
  );
};

export default DashBoard;
