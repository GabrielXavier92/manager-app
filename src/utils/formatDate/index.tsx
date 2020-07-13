import moment, { DurationInputArg2 } from 'moment';
import 'moment/locale/pt-br';

export const transformStringDayInTimestamp = (date: string): string => moment(date).valueOf().toString();

export const sumInDate = (date: string, minutes: number, param: DurationInputArg2): any => moment(date).add(minutes, param).toDate();

export const transformTimeStampInTodayDate = (date: string): string => moment(date, 'x').format('YYYY-MM-DD');

export const transformTimeStampInTodayDateHour = (date: string): string => moment(date, 'x').format('YYYY-MM-DDTHH:mm');

export const transformTimeStampInFullDate = (date: string): Date => moment(date, 'x').toDate();

export const transformDateInTodayDateHour = (date: any): string => moment(date).format('YYYY-MM-DDTHH:mm');

export const defaultTodayDate = () => moment().format('YYYY-MM-DD');

export const defaultTodayDateTime = () => moment().format('YYYY-MM-DDTHH:mm');

export const fromNow = (data: string): string => moment(data, 'x').fromNow(true);

export const getMonthInterval = (date: Date): { start: string, end: string } => {
  const startDate = moment([date.getFullYear(), date.getMonth()]);
  const endDate = moment(startDate).endOf('month');

  const start = startDate.valueOf().toString();
  const end = endDate.valueOf().toString();

  return { start, end };
};
