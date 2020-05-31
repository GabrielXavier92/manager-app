import React, { useState } from 'react';
import { Frame } from '@shopify/polaris';

import LeftMenu from '../LeftMenu';
import Header from '../Header';


const DashBoard: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <Frame
      topBar={<Header onNavigationToggle={handleOpenMenu} />}
      navigation={<LeftMenu />}
      showMobileNavigation={menu}
      onNavigationDismiss={handleOpenMenu}
    >
      <div>Pages</div>
    </Frame>
  );
};

export default DashBoard;
