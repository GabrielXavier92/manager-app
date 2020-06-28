import moment from 'moment';
import 'moment/locale/pt-br';

export const formatBirthDate = (date: Date) => moment(date).locale('pt-br').format('L');

export const transformStringInDateTime = (date: any) => new Date(date);

export const a = () => 'a';
