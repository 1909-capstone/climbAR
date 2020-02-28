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
