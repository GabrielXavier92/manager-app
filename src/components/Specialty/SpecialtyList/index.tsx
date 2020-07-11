import React from 'react';
import {
  Card, ResourceList, Page, Layout,
} from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import SpecialtyLine from '../SpecialtyLine';

import { useSpecialtiesQuery, Specialty } from '../../../generated/graphql';


const SpecialtyList: React.FC = () => {
  const history = useHistory();
  const { data, loading } = useSpecialtiesQuery();


  return (
    <Page
      title="Especialidades"
      primaryAction={{
        content: 'Nova especialidade',
        onAction: () => { history.push('/specialty'); },
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{ singular: 'Especialidade', plural: 'Especialidades' }}
              items={data?.specialties ? data.specialties : []}
              renderItem={(specialty: Specialty) => (<SpecialtyLine id={specialty.id} name={specialty.name} />)}
              loading={loading}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default SpecialtyList;
