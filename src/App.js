import React from 'react';
import './App.css';
import Employee from './components/Employee';

const employees = [
  {
  'number': '20200413001',
  'image':'https://placeimg.com/128/128/1',
  'name': '가나다',
  'sex': '男性',
  'position':'社員'
  },
  {
    'number': '20200413002',
    'image':'https://placeimg.com/128/128/2',
    'name': '라마바',
    'sex': '男性',
    'position':'社員'
  },
  {
    'number': '20200413003',
    'image':'https://placeimg.com/128/128/3',
    'name': '사아자',
    'sex': '女性',
    'position':'社員'
  }
]

function App() {
  return (
    <div>
    {
      employees.map(e => {
        return (
          <Employee
            key={e.number}
            number={e.number}
            image={e.image}
            name={e.name}
            sex={e.sex}
            position={e.position}
            />)
      })
    }
    </div>
  );
}

export default App;