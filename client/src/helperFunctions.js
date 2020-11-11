export function keyToTitle(str) {
  let nStr = str.replace(/_/gi, " ");
  return nStr[0].toUpperCase() + nStr.slice(1);
}
export function sortByKey(a, b, key, type, pseudoArr) {
  if (type === "up") {
    if (pseudoArr[a].metrics[key] > pseudoArr[b].metrics[key]) {
      return 1;
    }
    if (pseudoArr[a].metrics[key] < pseudoArr[b].metrics[key]) {
      return -1;
    }
    return 0;
  }
  if (type === "down") {
    if (pseudoArr[a].metrics[key] > pseudoArr[b].metrics[key]) {
      return -1;
    }
    if (pseudoArr[a].metrics[key] < pseudoArr[b].metrics[key]) {
      return 1;
    }
    return 0;
  }
}
