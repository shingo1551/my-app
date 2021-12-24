import { createStore } from "@stencil/store";

export interface ToDo {
  done: boolean;
  text: string;
}

const list: ToDo[] = [
  { text: 'lean TypeScript', done: true },
  { text: 'build Stencil App', done: false },
];

const { state } = createStore({
  count: 0,
  list: list,
});

function count() {
  state.count = state.list.reduce((sum, todo) => sum + (todo.done ? 0 : 1), 0);
}

export function push(todo: ToDo) {
  state.list.push(todo);
  count();
}

export function done(n: number) {
  state.list[n].done = !state.list[n].done;
  count();
}

export function archive() {
  state.list = state.list.filter(todo => !todo.done);
  count();
}

count();

export default state;
