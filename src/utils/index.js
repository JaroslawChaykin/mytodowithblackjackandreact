export const backLogCounter = (todos) => {
    let i = 0
    todos.forEach(item => !item.checked && i++ )
    return i
}