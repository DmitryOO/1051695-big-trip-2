import dayjs from 'dayjs';

const MILISECONDS_IN_MINUTE = 60000;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

const DATE_FORMAT = {
  monthDay: 'MMM D',
  hourMinute: 'HH:mm',
};

const getDefaultPoint = () => ({
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: 0,
  isFavorite: false,
  offers: [],
  type: 'taxi',
});

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeTaskDueDate(dueDate, dateFormat) {
  return dueDate ? dayjs(dueDate).format(dateFormat).toUpperCase() : '';
}

function getTimePeriod(start, end) {
  const period = dayjs(end).diff(start);
  if (period < 0) {
    return;
  }
  if (period < MINUTES_IN_HOUR * MILISECONDS_IN_MINUTE) {
    return dayjs(period).format('mm[M]');
    // return `${period.toFixed()} M`;
  }
  if (period < MINUTES_IN_DAY * MILISECONDS_IN_MINUTE) {
    return dayjs(period).format('HH[H] mm[M]');
    //   return `${~~(period / MINUTES_IN_HOUR)}H ${(period % MINUTES_IN_HOUR).toFixed()}M`;
  }

  return dayjs(period).format('DD[D] HH[H] mm[M]');

  // return `${~~(period / MINUTES_IN_DAY)}D ${~~(period % MINUTES_IN_DAY / MINUTES_IN_HOUR)}H ${(period % MINUTES_IN_HOUR).toFixed()}M`;
}

export { getRandomArrayElement, humanizeTaskDueDate, dayjs, getTimePeriod, getDefaultPoint, DATE_FORMAT };
