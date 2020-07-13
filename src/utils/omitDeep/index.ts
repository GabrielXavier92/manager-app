const omitDeepArrayWalk = (arr: any, key: any) => arr.map((val: any) => {
  if (Array.isArray(val)) return omitDeepArrayWalk(val, key);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (typeof val === 'object') return omitDeep(val, key);
  return val;
});

const omitDeep = (obj: any, key: any) => {
  const keys = Object.keys(obj);
  const newObj: any = {};
  keys.forEach((i) => {
    if (i !== key) {
      const val = obj[i];
      if (val instanceof Date) newObj[i] = val;
      else if (Array.isArray(val)) newObj[i] = omitDeepArrayWalk(val, key);
      else if (typeof val === 'object' && val !== null) newObj[i] = omitDeep(val, key);
      else newObj[i] = val;
    }
  });
  return newObj;
};

export default omitDeep;
