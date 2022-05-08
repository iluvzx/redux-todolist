import { HANDLEINPUTCHANGE, INSERTTODO, DELETETODO } from "./TodoActionsTypes"

// 监听输入框的改变
export const handleInputChange = ev => ({
  type: HANDLEINPUTCHANGE,
  value: ev.target.value
})

// 插入数据
export const insertTodo = () => ({
  type: INSERTTODO
})

// 删除数据
export const deleteTodo = index => ({
  type: DELETETODO,
  index,
})

