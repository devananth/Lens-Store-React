export const itemNotInList = (id, arr) =>
  arr.some(({ _id }) => id === _id) === false;
