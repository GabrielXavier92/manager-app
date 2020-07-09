import React, { useEffect } from 'react';
import {
  Card, ResourceList, Page, Layout,
} from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import ProcedureTableLine from '../ProcedureTableLine';

import { useProcedureTable } from '../../../hooks';
import { ProcedureTable } from '../../../types/types';


const ProcedureTableList: React.FC = () => {
  const history = useHistory();
  const { getProcedureTables, queryResults } = useProcedureTable().useGetProcedureTables();

  const handleGetProcedureTables = () => {
    getProcedureTables();
  };

  useEffect(handleGetProcedureTables, []);

  const { data } = queryResults;

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
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default ProcedureTableList;
