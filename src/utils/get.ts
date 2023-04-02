export function get(m, path) {
  let res = m;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    res = res[key];
  }

  return res;
}
