export const cutTitle = (str: string): string => {
  const splitString = str.split('');

  if (splitString.length > 10) {
    const slicedString = splitString.slice(0, 10);
    slicedString.push(' ...');
    return slicedString.join('');
  }

  return str;
};
