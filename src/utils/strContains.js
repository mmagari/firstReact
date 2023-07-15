const strContains = (str, subStr) => {
  const formattedStr = str.toLowerCase();
  const formattedSubStr = subStr.toLowerCase();
  return formattedStr.includes(formattedSubStr);
};

export default strContains;