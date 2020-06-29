import React from 'react';
import { Navigation } from '@shopify/polaris';
import { HomeMajorMonotone, OrdersMajorTwotone } from '@shopify/polaris-icons';
import { useHistory } from 'react-router-dom';


const LeftMenu = () => {
  const history = useHistory();

  const handleChangePage = (route: string) => {
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
            icon: OrdersMajorTwotone,
            onClick: () => handleChangePage('/doctorlist'),
          },
          {
            label: 'Especialidades',
            icon: OrdersMajorTwotone,
            onClick: () => handleChangePage('/specialtylist'),
          },
        ]}
      />
    </Navigation>
  );
};

export default LeftMenu;
