import moment from 'moment';
export const convertDatetimeAgo = (value) => {
    return moment.utc(value).local().startOf('seconds').fromNow();
}