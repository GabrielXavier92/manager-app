import React from 'react';
import { Avatar, ResourceList, TextStyle } from '@shopify/polaris';

import { useHistory } from 'react-router-dom';

import { Patient } from '../../../generated/graphql';
import { fromNow } from '../../../utils/formatDate';

const DoctorLine: React.FC<Patient> = ({
  id, name, gender, birth,
}) => {
  const history = useHistory();

  const media = <Avatar customer size="medium" name={name} />;

  return (
    <ResourceList.Item
      id={id}
      name={name}
      media={media}
      accessibilityLabel={`View details for ${name}`}
      onClick={() => {
        history.push(`/patient/${id}`);
      }}
    >
      <h3>
        <TextStyle variation="strong">{name}</TextStyle>
      </h3>
      <div>
        {gender}

        {birth && (
          <>
            {' - Idade '}
            {fromNow(birth)}
          </>
        )}
      </div>
    </ResourceList.Item>
  );
};

export default DoctorLine;
