export const dateFormat = (str: string): string => {
  const monthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Des',
  ];
  const strSplit = str.split('-');

  const date = strSplit[2];
  const month = monthList[parseInt(strSplit[1]) - 1];
  const year = strSplit[0];

  return ` ${date} ${month}, ${year}`;
};
