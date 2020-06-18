import React from 'react';
import { Navigation } from '@shopify/polaris';
import { HomeMajorMonotone, OrdersMajorTwotone } from '@shopify/polaris-icons';

const LeftMenu = () => {
  const toggleIsLoading = () => {
    console.log('click');
  };

  return (
    <Navigation location="/">
      <Navigation.Section
        separator
        items={[
          {
            label: 'Home',
            icon: HomeMajorMonotone,
            onClick: toggleIsLoading,
          },
          {
            label: 'Profissionais',
            icon: OrdersMajorTwotone,
            onClick: toggleIsLoading,
          },
        ]}
      />
    </Navigation>
  );
};

export default LeftMenu;
