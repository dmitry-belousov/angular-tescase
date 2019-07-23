export const uniqBy = (arr, predicate) => {
  const cb = typeof predicate === 'function' ? predicate : (o: string) => o[predicate];
  return [...arr.reduce((map, item) => {
    const key = (item === null || item === undefined)
      ? item
      : cb(item);
    // tslint:disable-next-line:no-unused-expression
    map.has(key) || map.set(key, item);
    return map;
  }, new Map()).values()];
};
