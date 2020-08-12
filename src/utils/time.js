export const getTimeByTimeZone = (timezone) => {
  let date = new Date().toLocaleTimeString();
  if (timezone) {
    date = new Date().toLocaleTimeString("vi-VI", { timeZone: timezone });
  }
  return date;
};
