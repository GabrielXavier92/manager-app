import React from 'react';
import { Navigation } from '@shopify/polaris';
import {
  ListMajorMonotone, HomeMajorMonotone, CustomersMajorMonotone, ChecklistAlternateMajorMonotone, 
} from '@shopify/polaris-icons';
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
            onClick: () => handleChangePage('/doctorList'),
          },
        ]}
      />
      <Navigation.Section
        title="Configurações"
        items={[
          {
            label: 'Tabelas de Procedimentos',
            icon: ChecklistAlternateMajorMonotone,
            onClick: () => handleChangePage('/procedureTableList'),
          },
          {
            label: 'Especialidades',
            icon: ListMajorMonotone,
            onClick: () => handleChangePage('/specialtylist'),
          },
        ]}
      />
    </Navigation>
  );
};

export default LeftMenu;
