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
    <Navigation location="/dashboard">
      <Navigation.Section
        separator
        items={[
          {
            label: 'Home',
            icon: HomeMajorMonotone,
            onClick: () => handleChangePage('/dashboard'),
          },
          {
            label: 'Profissionais',
            icon: OrdersMajorTwotone,
            onClick: () => handleChangePage('/dashboard/doctorlist'),
          },
          {
            label: 'Especialidades',
            icon: OrdersMajorTwotone,
            onClick: () => handleChangePage('/dashboard/specialtylist'),
          },
        ]}
      />
    </Navigation>
  );
};

export default LeftMenu;
