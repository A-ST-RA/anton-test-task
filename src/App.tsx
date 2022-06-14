import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { UserForm } from './user/user.form';
import { UserList } from './user/user.list';
import { UserType } from './user/user.type';

function App() {
  const [ users, setUsers ] = useState<UserType[]>([
    {
      id: 1,
      name: 'Иван Иванович',
      rank: 'Junior',
      direction: 'Back',
    },
    {
      id: 2,
      name: 'Иван Степаныч',
      rank: 'Middle',
      direction: 'Front',
    },
    {
      id: 3,
      name: 'Иван Фомич',
      rank: 'Junior',
      direction: 'Back',
    },
    {
      id: 4,
      name: 'Иван Кузмич',
      rank: 'Senior',
      direction: 'Back',
    }
  ]);

  const onDelete = useCallback((id: number) => {
    setUsers(users.filter(el => el.id !== id));
  }, [users])

  return (
    <>
      <UserForm />
      <UserList users={users} onDelete={onDelete}/>
    </>
  );
}

export default App;
