export default function hasValuesFromArray(set, array) {
  return array.every((arrayValue) => set.has(arrayValue));
}
