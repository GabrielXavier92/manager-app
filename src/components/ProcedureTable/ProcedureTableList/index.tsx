import React from 'react';
import {
  Card, ResourceList, Page, Layout,
} from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import ProcedureTableLine from '../ProcedureTableLine';

import { useProcedureTablesQuery, ProcedureTable } from '../../../generated/graphql';


const ProcedureTableList: React.FC = () => {
  const history = useHistory();

  const { data, loading } = useProcedureTablesQuery();

  return (
    <Page
      title="Tabelas de Procedimentos"
      primaryAction={{
        content: 'Nova tabela de procedimentos',
        onAction: () => { history.push('/procedureTable'); },
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{ singular: 'Tabela de Procedimentos', plural: 'Tabelas de Procedimentos' }}
              items={data?.procedureTables ? data.procedureTables : []}
              renderItem={(procedureTable: ProcedureTable) => (<ProcedureTableLine id={procedureTable.id} name={procedureTable.name} />)}
              loading={loading}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default ProcedureTableList;
