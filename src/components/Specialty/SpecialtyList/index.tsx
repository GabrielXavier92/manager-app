import React from 'react';
import {
  Card, ResourceList, Page, Layout,
} from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import SpecialtyLine from '../SpecialtyLine';

import { Specialty } from '../../../types/types';
import { useGetSpecialtiesQuery } from '../../../generated/graphql';


const SpecialtyList: React.FC = () => {
  const history = useHistory();
  const { data, loading } = useGetSpecialtiesQuery();


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
              items={data?.getSpecialties ? data.getSpecialties : []}
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
