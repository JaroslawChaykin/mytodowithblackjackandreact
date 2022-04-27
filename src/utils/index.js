export const backLogCounter = (todos) => {
    let i = 0
    todos.forEach(item => !item.checked && i++ )
    return i
}
export const isPhone = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));