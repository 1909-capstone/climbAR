export const htmlDate = addDays => {
  const now = new Date().getTime();
  const futureTime = now + 1000 * 60 * 60 * addDays;
  const futureDate = new Date(futureTime);
  const year = futureDate.getFullYear();
  const tempMonth = futureDate.getMonth() + 1;
  const month = tempMonth < 10 ? `0${tempMonth}` : tempMonth;
  const tempDay = futureDate.getDay();
  const day = tempDay < 10 ? `0${tempDay}` : tempDay;
  return `${year}-${month}-${day}`;
};

export const getCookie = () =>
  document.cookie
    .split(';')
    .filter(c => /session_id=/.test(c))[0]
    .replace(/session_id=/, '')
    .replace(/ /, '');

export const average = (arr, numberProp) =>
  arr.length === 0
    ? 'No Ratings'
    : (arr.reduce((sum, el) => sum + el[numberProp], 0) / arr.length).toFixed(
        0
      );
