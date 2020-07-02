import React from 'react';
import { TopBar } from '@shopify/polaris';

import UserMenu from '../UserMenu';

interface IHeader {
  onNavigationToggle: () => void
}

const Header: React.FC<IHeader> = ({ onNavigationToggle }) => (
  <TopBar
    showNavigationToggle
    userMenu={<UserMenu />}
    onNavigationToggle={onNavigationToggle}
  />
);

export default Header;
