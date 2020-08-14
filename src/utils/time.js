export const getTimeByTimeZone = (timezone) => {
  if (timezone) {
    return new Date().toLocaleTimeString("vi-VI", { timeZone: timezone });
  }
  return new Date().toLocaleTimeString("vi-VI");
};

export const formatTime = (time) => {
  return time.slice(0, time.lastIndexOf(':'));
};
