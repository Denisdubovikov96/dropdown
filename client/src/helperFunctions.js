export function keyToTitle(str) {
  let nStr = str.replace(/_/gi, " ");
  return nStr[0].toUpperCase() + nStr.slice(1);
}
export function sortByKey(a, b, key, type) {
  if (type === "up") {
    if (a.metrics[key] > b.metrics[key]) {
      return 1;
    }
    if (a.metrics[key] < b.metrics[key]) {
      return -1;
    }
    return 0;
  }
  if (type === "down") {
    if (a.metrics[key] > b.metrics[key]) {
      return -1;
    }
    if (a.metrics[key] < b.metrics[key]) {
      return 1;
    }
    return 0;
  }
}
