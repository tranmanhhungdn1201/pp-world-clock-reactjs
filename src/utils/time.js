export const getTimeByTimeZone = (timezone) => {
  if (timezone) {
    return new Date().toLocaleTimeString("vi-VI", { timeZone: timezone });
  }
  return new Date().toLocaleTimeString();
};
