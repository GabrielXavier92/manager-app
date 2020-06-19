import React, { useCallback, useState, useEffect } from 'react';
import { Card, Filters, ResourceList } from '@shopify/polaris';

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
    <div>
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
    </div>
  );
};

export default DoctorList;
