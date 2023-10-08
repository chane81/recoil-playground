import { todoListState } from '@/recoil/todoList/todoListState';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

const List: FC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className='mt-10 w-full text-lg'>
      <div className='text-2xl font-semibold text-sky-600'># Todo List</div>
      {todoList?.map((item, idx) => (
        <div
          className='flex w-full justify-start text-slate-600 gap-4'
          key={idx}
        >
          <div>Name: {item.title}</div>
          <div>Value: {item.contents}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
