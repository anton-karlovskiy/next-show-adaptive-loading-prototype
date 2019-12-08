
const serializeToQueryParam = queryObject => {
  const queryString = [];
  for (const key in queryObject)
    if (queryObject.hasOwnProperty(key)) {
      queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryObject[key]));
    }
  return queryString.join('&');
};

export {
  serializeToQueryParam
};
