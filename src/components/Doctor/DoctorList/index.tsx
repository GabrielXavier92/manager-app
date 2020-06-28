import React, { useCallback, useState, useEffect } from 'react';
import {
  Card, Filters, ResourceList, Page, Layout,
} from '@shopify/polaris';

import { useHistory } from 'react-router-dom';

import DoctorLine from '../DoctorLine';

import { useDoctor } from '../../../hooks';

import { Doctor } from '../../../types/types.d';

const DoctorList: React.FC = () => {
  const history = useHistory();

  const [queryValue, setQueryValue] = useState('');
  const { getDoctors, queryResults } = useDoctor().useGetDoctors();

  const user = {
    age: 21,
  };

  user.age = 25;

  const handleFiltersQueryChange = (value: string) => setQueryValue(value);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = () => handleQueryValueRemove();

  useEffect(() => { getDoctors(); }, []);

  const { data } = queryResults;

  return (
    <Page
      title="Profissionais"
      // secondaryActions={[
      //   { content: 'Importar', icon: ImportMinor },
      // ]}
      primaryAction={{
        content: 'Novo profissional',
        onAction: () => { history.push('/dashboard/doctor'); },
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{ singular: 'doctor', plural: 'doctors' }}
              filterControl={(
                <Filters
                  queryValue={queryValue}
                  filters={[]}
                  onQueryChange={handleFiltersQueryChange}
                  onQueryClear={handleQueryValueRemove}
                  onClearAll={handleFiltersClearAll}
                />
              )}
              items={data?.getDoctors ? data.getDoctors : []}
              renderItem={(doctor: Doctor) => (<DoctorLine id={doctor.id} name={doctor.name} register={doctor.register} gender={doctor.gender} />)}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DoctorList;
