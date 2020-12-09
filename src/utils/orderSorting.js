export const currentOrder = (order) => {
  let currentSort;
  switch (order) {
    case 'default':
      currentSort = 'asc';
      break;
    case 'asc':
      currentSort = 'desc';
      break;
    case 'desc':
      currentSort = 'default';
      break;
    default:
      currentSort = 'default';
  }
  return currentSort;
}