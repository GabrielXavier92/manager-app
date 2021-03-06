import React, { useCallback, useState } from 'react';
import {
  Card, Filters, ResourceList, Page, Layout,
} from '@shopify/polaris';

import { useHistory } from 'react-router-dom';

import DoctorLine from '../DoctorLine';

import { useDoctorsQuery, Doctor } from '../../../generated/graphql';

const DoctorList: React.FC = () => {
  const history = useHistory();

  const [queryValue, setQueryValue] = useState('');
  const { data, loading } = useDoctorsQuery();

  const handleFiltersQueryChange = (value: string) => setQueryValue(value);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = () => handleQueryValueRemove();


  return (
    <Page
      title="Profissionais"
      // secondaryActions={[
      //   { content: 'Importar', icon: ImportMinor },
      // ]}
      primaryAction={{
        content: 'Novo profissional',
        onAction: () => { history.push('/doctor'); },
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{ singular: 'Profissonal', plural: 'Profissionais' }}
              filterControl={(
                <Filters
                  queryValue={queryValue}
                  filters={[]}
                  onQueryChange={handleFiltersQueryChange}
                  onQueryClear={handleQueryValueRemove}
                  onClearAll={handleFiltersClearAll}
                />
              )}
              loading={loading}
              items={data?.doctors ? data.doctors : []}
              renderItem={(doctor: Doctor) => (<DoctorLine id={doctor.id} name={doctor.name} register={doctor.register} gender={doctor.gender} />)}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DoctorList;
