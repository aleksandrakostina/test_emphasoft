export const sortDefault = 'default';

export const tableColumns = [
  {
    label: 'id',
    name: 'ID',
    sort: sortDefault,
    order: null,
    classes: 'users__cell users__id users__cell_header',
    isSort: true,
    filter: false
  },
  {
    label: 'username',
    name: 'Username',
    sort: sortDefault,
    order: null,
    classes: 'users__cell users__name users__cell_header',
    isSort: true,
    filter: true
  },
  {
    label: 'first_name',
    name: 'Firstname',
    sort: sortDefault,
    order: null,
    classes: 'users__cell users__name users__cell_header',
    isSort: true,
    filter: true
  },
  {
    label: 'last_name',
    name: 'Lastname',
    sort: sortDefault,
    order: null,
    classes: 'users__cell users__name users__cell_header',
    isSort: false,
    filter: false
  }
];

export const changeTableColumns = (currentSort, columns, id) => {
  let changeColumns;
  if (currentSort === sortDefault) {
    changeColumns = columns.map((element, index) => (
      { ...element,
        sort: index === id ? currentSort : element.sort,
        order: index === id ? null : element.order
      }
    ))
  } else {
    let ord = columns.filter(item => item.order).map(i => i.order);
    let maxOrder = ord.length > 0 ? Math.max(...ord) : 0;
      
    changeColumns = columns.map((element, index) =>  (
      { ...element, 
        sort: index === id ? currentSort : element.sort,
        order: index === id ? maxOrder + 1 : element.order
      }
    ));
  }
  return changeColumns;
}
