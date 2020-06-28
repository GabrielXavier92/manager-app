import moment from 'moment';

export const transformStringDayInTimestamp = (date: string): string => moment(date).valueOf().toString();

export const transformTimeStampInTodayDate = (date: string): string => moment(date, 'x').format('YYYY-MM-DD');

export const defaultTodayDate = () => moment().format('YYYY-MM-DD');

export const defaultTodayDateTime = () => moment().format('YYYY-MM-DDThh:mm');

export const a = () => 'a';
