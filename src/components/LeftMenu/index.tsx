import React from 'react';
import { Navigation } from '@shopify/polaris';
import { HomeMajorMonotone, CustomersMajorMonotone, CollectionsMajorMonotone } from '@shopify/polaris-icons';
import { useHistory } from 'react-router-dom';

interface ILeftMenu {
  onNavigationToggle: () => void
}

const LeftMenu: React.FC<ILeftMenu> = ({ onNavigationToggle }) => {
  const history = useHistory();

  const handleChangePage = (route: string) => {
    onNavigationToggle();
    history.push(route);
  };

  return (
    <Navigation location="/">
      <Navigation.Section
        separator
        items={[
          {
            label: 'Home',
            icon: HomeMajorMonotone,
            onClick: () => handleChangePage('/'),
          },
          {
            label: 'Profissionais',
            icon: CustomersMajorMonotone,
            onClick: () => handleChangePage('/doctorlist'),
          },
          {
            label: 'Especialidades',
            icon: CollectionsMajorMonotone,
            onClick: () => handleChangePage('/specialtylist'),
          },
        ]}
      />
    </Navigation>
  );
};

export default LeftMenu;
