const MILISECONDS_IN_MINUTE = 60000;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

const DateFormat = {
  monthDay: 'MMM D',
  hourMinute: 'HH:mm',
  yearMonthDay: 'YYYY-MM-DD',
  dateTime:'DD/MM/YY HH:mm',
  dateTimeT: 'YYYY-MM-DDTHH:mm'

};


const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const EmptyMessage = {
  EVERYTHING: 'Click New Event to create your first point',
  FUTURE: 'There are no future events now',
  PRESENT: 'There are no present events now',
  PAST: 'There are no past events now',
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SortType = {
  DEFAULT: 'default',
  TIME: 'time',
  PRICE: 'price',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

export {MILISECONDS_IN_MINUTE, MINUTES_IN_HOUR, MINUTES_IN_DAY, DateFormat, POINT_TYPES, EmptyMessage, SortType, FilterType, UserAction, UpdateType};
