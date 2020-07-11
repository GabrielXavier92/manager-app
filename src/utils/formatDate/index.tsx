import moment from 'moment';
import 'moment/locale/pt-br';

export const transformStringDayInTimestamp = (date: string): string => moment(date).valueOf().toString();

export const transformTimeStampInTodayDate = (date: string): string => moment(date, 'x').format('YYYY-MM-DD');

export const defaultTodayDate = () => moment().format('YYYY-MM-DD');

export const defaultTodayDateTime = () => moment().format('YYYY-MM-DDThh:mm');

export const fromNow = (data: string): string => moment(data, 'x').fromNow(true);
