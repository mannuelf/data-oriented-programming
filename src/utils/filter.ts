export function filter(coll: [], f: () => void) {
  let res = [];
  for (let i = 0; i < coll.length; i++) {
    if (f(coll[i])) {
      res.push(coll[i]);
    }
  }
}
