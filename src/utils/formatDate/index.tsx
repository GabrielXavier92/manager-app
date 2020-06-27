import moment from 'moment';
import 'moment/locale/pt-br';

export const formatDate = (date: Date) => moment(date).locale('pt-br').format('L');

export const a = () => 'a';
