import React, { useCallback, useState } from 'react';
import { Card, Filters, ResourceList } from '@shopify/polaris';

import DoctorLine from '../DoctorLine';
import { Doctor } from '../../../types/types.d';

const DoctorList: React.FC = () => {
  const [queryValue, setQueryValue] = useState('');

  const handleFiltersQueryChange = (value: string) => setQueryValue(value);

  const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);

  const handleFiltersClearAll = () => handleQueryValueRemove();

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
          items={[
            {
              id: 341,
              url: 'customers/341',
              name: 'Mae Jemison',
              location: 'Decatur, USA',
            },
            {
              id: 256,
              url: 'customers/256',
              name: 'Ellen Ochoa',
              location: 'Los Angeles, USA',
            },
          ]}
          renderItem={(item: Doctor) => (<DoctorLine {...item} />)}
        />
      </Card>
    </div>
  );
};

export default DoctorList;
