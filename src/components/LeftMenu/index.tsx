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
            label: 'Dashboard',
            icon: HomeMajorMonotone,
            onClick: toggleIsLoading,
          },
          {
            label: 'Jaded Pixel Orders',
            icon: OrdersMajorTwotone,
            onClick: toggleIsLoading,
          },
        ]}
      />
    </Navigation>
  );
};

export default LeftMenu;
