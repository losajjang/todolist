import {ActionType, createAction, createReducer} from 'typesafe-actions';

/* 액션 타입 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
let nextId = 1;

/* 액션 생성 함수 */
export const addTodo = createAction('todos/ADD_TODO', (text: string) => ({
  id: nextId++,
  text: text,
}))();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const deleteTodo = createAction(DELETE_TODO)<number>();

/* 타입 선언 */
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

/* deprecated */
// type TodosAction =
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof toggleTodo>
//   | ReturnType<typeof deleteTodo>;

const actions = {addTodo, toggleTodo, deleteTodo};
export type TodosAction = ActionType<typeof actions>;
export type TodosState = Todo[];

/* 초기값 */
const initialState: TodosState = [];

/* 리듀서 */
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
  state.concat({
    ...action.payload,
    done: false,
  }),
  [TOGGLE_TODO]: (state, {payload: id}) =>
  state.map(todo => (todo.id === id ? {...todo, done: !todo.done} : todo)),
  [DELETE_TODO]: (state, {payload: id}) => state.filter(todo => todo.id !== id),
});

export default todos