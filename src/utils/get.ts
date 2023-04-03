export function get(data: unknown, path: []) {
  if (!Array.isArray(path)) {
    return false;
  }

  let result = data;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    result = result[key];
  }

  return result;
}
