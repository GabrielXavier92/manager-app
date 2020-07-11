import React, { useState } from 'react';
import { Frame } from '@shopify/polaris';

import LeftMenu from '../../components/LeftMenu';
import Header from '../../components/Header';

import { AuthRoutes } from '../../routes';

const DashBoard: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(!menu);
  };

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
