export function filterUsers(users, inputValue) {
  return users.filter(user => user.username.toLowerCase().startsWith(inputValue.toLowerCase()));
}

export function filterUsersAll(users, inputValue, key) {
  return users.filter(user => user[key].toLowerCase().startsWith(inputValue.toLowerCase()));
}