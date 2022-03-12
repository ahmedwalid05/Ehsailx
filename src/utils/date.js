export const formatDateToYMD = (date) => date.toISOString().slice(0, 10);

export const getDaysAgo = (days) => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() - days);
  return date;
};
