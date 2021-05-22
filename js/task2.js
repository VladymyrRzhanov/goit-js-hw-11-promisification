const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return Promise.resolve( allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    ))
};

  const logger = updatedUsers => {
    console.table(updatedUsers);
    creatTable(updatedUsers);
};

const creatTable = updatedUsers => {
  const table = document.createElement('table');
    table.classList.add('table');
    const tableRaw = `<tr>
      <td>index
      </td>
      <td>name
      </td>
      <td>active
      </td>
      </tr>`;
  table.insertAdjacentHTML('beforeend', tableRaw);
 const tableEl = updatedUsers.map((user, index) => {
      const row = `<tr>
      <td>${index}
      </td>
      <td>${user.name}
      </td>
      <td>${user.active}
      </td>
      </tr>`;
      table.insertAdjacentHTML('beforeend',row)
 })
  
  document.body.append(table)
}


toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);