import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Card, Layout, Page } from '@shopify/polaris';
import moment from 'moment';

import { useSchedulesQuery, Schedule } from '../../generated/graphql';

import ScheduleFormModal from './ScheduleModalForm';
import { transformTimeStampInFullDate, transformDateInTodayDateHour } from '../../utils/formatDate';
import omitDeep from '../../utils/omitDeep';

const localizer = momentLocalizer(moment);

const ScheduleCalendar: React.FC = () => {
  const [events, setEvents] = useState<Array<any>>([]);
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Schedule>();

  // TODO: Pensar em uma forma melhor de passar end e start
  const { data } = useSchedulesQuery({
    variables: {
      end: '',
      start: '',
    },
  });

  const handleOnClose = () => {
    setSelectedEvent(undefined);
    setOpen(false);
  };

  const handleOnDoubleClickEvent = (e: Schedule) => {
    const schedule: Schedule = {
      ...e,
      start: transformDateInTodayDateHour(e.start),
    };
    setSelectedEvent(schedule);
    setOpen(!open);
  };

  const handleGenerateEvents = () => {
    if (data?.schedules) {
      const generateEvents = data.schedules.map((schedule) => {
        const filteSchedule = omitDeep(schedule, '__typename');
        return {
          ...filteSchedule,
          start: transformTimeStampInFullDate(filteSchedule?.start!),
          end: transformTimeStampInFullDate(filteSchedule?.end!),
        };
      });
      setEvents(generateEvents!);
    }
  };

  useEffect(handleGenerateEvents, [data?.schedules]);

  return (
    <Page
      fullWidth
    >
      {open && <ScheduleFormModal open={open} onClose={handleOnClose} selectedEvent={selectedEvent} />}
      <Layout>
        <Layout.Section>
          <Card
            title="Agendamentos"
            sectioned
            actions={[{
              content: 'Novo agendamento',
              onAction: () => { setOpen(true); },
            }]}
          >
            <div style={{ height: '600px' }}>
              <Calendar
                culture="pt-br"
                localizer={localizer}
                events={events}
                popup
                onDoubleClickEvent={handleOnDoubleClickEvent}
              />
            </div>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card title="Agendamentos" sectioned>
            <p>Oi</p>

          </Card>
        </Layout.Section>

      </Layout>
    </Page>
  );
};

export default ScheduleCalendar;
