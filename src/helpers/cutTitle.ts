export const cutTitle = (str: string): string => {
  const splitString = str.split('');

  if (splitString.length > 20) {
    const slicedString = splitString.slice(0, 20);
    slicedString.push(' ...');
    return slicedString.join('');
  }

  return str;
};
