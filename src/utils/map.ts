export function map<T, U>(coll: T, f: U) {
  let result = [];

  for (let i = 0; i < coll.length; i++) {
    result[i] = f(coll[i]);
  }
  return result;
}
