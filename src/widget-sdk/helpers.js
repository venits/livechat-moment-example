export const getQueryParams = () =>
  window.location.search
    .replace(/^\?/, "")
    .split("&")
    .map(pair => pair.split("=").map(decodeURIComponent))
    .reduce((params, [param, value]) => {
      params[param] = value;
      return params;
    }, {});

export const getQueryParam = name => {
  const queryParams = getQueryParams();
  return queryParams[name] !== undefined ? queryParams[name] : null;
};

export function hashStringToJson() {
  let pieces = window.location.hash.substring(1).split("&"),
    data = {},
    i,
    parts;

  for (i = 0; i < pieces.length; i++) {
    parts = pieces[i].split("=");
    if (parts.length < 2) {
      parts.push("");
    }
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }
  return data;
}

export const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);
