export function get<T, U>(m: T, path: U) {
  let result = m;

  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    result = result[key];
  }

  return result;
}
