import { atom } from 'recoil';

export interface ITodoListState {
  title: string;
  contents: string;
}

export const todoListState = atom<ITodoListState[]>({
  key: 'todoList/atom',
  default: []
});
