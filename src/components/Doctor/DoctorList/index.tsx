import React, { useCallback, useState, useEffect } from 'react';
import {
  Card, Filters, ResourceList, Page, Layout,
} from '@shopify/polaris';

import DoctorLine from '../DoctorLine';

import { useGetDoctors } from '../../../hooks';

import { Doctor } from '../../../types/types.d';

const DoctorList: React.FC = () => {
  const [queryValue, setQueryValue] = useState('');
  const { getDoctors, queryResults } = useGetDoctors();


  const handleFiltersQueryChange = (value: string) => setQueryValue(value);
  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
  const handleFiltersClearAll = () => handleQueryValueRemove();

  useEffect(getDoctors, []);
  const { data } = queryResults;

  return (
    <Page
      title="Profissionais"
      // secondaryActions={[
      //   { content: 'Importar', icon: ImportMinor },
      // ]}
      primaryAction={{
        content: 'Novo profissional',
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
