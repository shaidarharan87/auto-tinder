const deserializeQuery = (query: string, noQuestionMark = false) => {
  const pairs = (noQuestionMark ? query : query.substring(1)).split('&');
  const array = pairs.map((elem) => elem.split('='));
  return Object.fromEntries(array);
};

const serializeQuery = (queryParams: string) =>
  Object.entries(queryParams).reduce((acc, [key, value], index, array) => {
    if (typeof value === 'undefined') {
      return acc;
    }
    const postfix = index === array.length - 1 ? '' : '&';
    return `${acc}${encodeURIComponent(key)}=${encodeURIComponent(
      value
    )}${postfix}`;
  }, '?');

export { deserializeQuery, serializeQuery };
