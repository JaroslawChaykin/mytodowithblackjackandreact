export type TodoType = {
  id: number,
  name: string,
  checked: boolean,

}
export type TodosStateType = {
  todos: TodoType[],
  query: string
}