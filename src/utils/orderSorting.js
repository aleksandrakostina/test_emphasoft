const sortDesc = 'desc';
const sortDefault = 'default';
const sortAsc = 'asc';

export const changeCurrentOrder = (sort) => {
  let currentSort;
  switch (sort) {
    case sortDefault:
      currentSort = sortAsc;
      break;
    case sortAsc:
      currentSort = sortDesc;
      break;
    case sortDesc:
      currentSort = sortDefault;
      break;
    default:
      currentSort = sortDefault;
  }
  return currentSort;
}