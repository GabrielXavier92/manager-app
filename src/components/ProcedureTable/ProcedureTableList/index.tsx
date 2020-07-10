import React from 'react';
import {
  Card, ResourceList, Page, Layout,
} from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import ProcedureTableLine from '../ProcedureTableLine';

import { ProcedureTable } from '../../../types/types.d';
import { useGetProcedureTablesQuery } from '../../../generated/graphql';


const ProcedureTableList: React.FC = () => {
  const history = useHistory();

  const { data, loading } = useGetProcedureTablesQuery();

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
              items={data?.getProcedureTables ? data.getProcedureTables : []}
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
