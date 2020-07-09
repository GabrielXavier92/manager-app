import React, { useEffect } from 'react';
import {
  Card, ResourceList, Page, Layout,
} from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import SpecialtyLine from '../SpecialtyLine';

import { useSpecialty } from '../../../hooks';
import { Specialty } from '../../../types/types';


const SpecialtyList: React.FC = () => {
  const history = useHistory();
  const { getSpecialties, queryResults } = useSpecialty().useGetSpecialties();

  const handleGetSpecialties = () => {
    getSpecialties();
  };

  useEffect(handleGetSpecialties, []);

  const { data } = queryResults;

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
              renderItem={(specialty: Specialty) => (<SpecialtyLine id={specialty.id} name={specialty.name} procedures={specialty.procedures} />)}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default SpecialtyList;
