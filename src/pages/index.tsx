import { Inter } from 'next/font/google';
import { RecoilRoot, useRecoilState } from 'recoil';
import { ITodoListState, todoListState } from '@/recoil/todoList/todoListState';
import { useState } from 'react';
import List from '@/views/todoList/List';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [todo, setTodo] = useState<ITodoListState>({ title: '', contents: '' });
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodo({ ...todo, [name]: value });
  };

  return (
    <main className='mx-auto mt-6 w-fit flex flex-col items-center container p-4 bg-slate-200 rounded-md text-slate-600 text-lg'>
      <div className='flex items-center gap-6'>
        <div>
          Name:
          <input
            className='outline-none px-2 ml-2'
            type='text'
            name='title'
            onChange={handleChange}
          />
        </div>
        <div>
          Value:
          <input
            className='outline-none px-2 ml-2'
            type='text'
            name='contents'
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => setTodoList([...todoList, todo])}
          className='text-slate-200 bg-sky-500 hover:bg-sky-600 rounded-lg py-1 px-4 transition-colors'
        >
          Add
        </button>
      </div>
      <List />
    </main>
  );
}
