/**
 * Function for getting todays index nmbr
 *
 * @returns
 */
 const getTodayIndex = () => {
  // NOTE: doesn't work on Sundays
  // TODO: ^ fix it!
  const weekDayIndex = new Date().getDay() - 1;
  return weekDayIndex;
};

export {getTodayIndex};
