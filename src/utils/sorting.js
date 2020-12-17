export function sortAscending(users) {
  return users.sort((a, b) => a.id - b.id);
}

export function sortDescending(users) {
  return users.sort((a, b) => b.id - a.id);
}

export function sortingUsers(users, key, order) {
  if(order !== 'asc' && order !== 'desc') return users;
  return [...users].sort((a, b) => {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const A = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key];
    const B = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key];
    
    let direction = 0;
    if (A > B) {
      direction = 1;
    } else if (A < B) {
      direction = -1;
    }
    return (
      (order === 'desc') ? (direction * -1) : direction
    );
  });
}