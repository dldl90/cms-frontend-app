export const getLastString = str => str.substr(str.lastIndexOf('/') + 1);

export const getRelativeUrl = fullUrl => `/${fullUrl.replace(/^(?:\/\/|[^/]+)*\//, '')}`;

export const toCamel = snakeCase => {
  return snakeCase.replace(/([-_][a-z])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};
