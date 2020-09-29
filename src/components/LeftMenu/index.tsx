import React from 'react';
import { Navigation } from '@shopify/polaris';
import {
  CategoriesMajorMonotone, ListMajorMonotone, HomeMajorMonotone, CustomersMajorMonotone, ChecklistAlternateMajorMonotone, CalendarMajorMonotone,
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
            label: 'Agenda',
            icon: CalendarMajorMonotone,
            onClick: () => handleChangePage('/scheduleCalendar'),
          },
          {
            label: 'Guias de Atendimento',
            icon: ChecklistAlternateMajorMonotone,
            onClick: () => handleChangePage('/guideList'),
          },
          {
            label: 'Profissionais',
            icon: CustomersMajorMonotone,
            onClick: () => handleChangePage('/doctorList'),
          },
          {
            label: 'Pacientes',
            icon: CustomersMajorMonotone,
            onClick: () => handleChangePage('/patientList'),
          },
        ]}
      />
      <Navigation.Section
        title="Configurações"
        items={[
          {
            label: 'Tabelas de Procedimentos',
            icon: CategoriesMajorMonotone,
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
