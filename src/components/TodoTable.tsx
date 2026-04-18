import { useState } from 'react'

interface Todo {
  id: number
  title: string
  completed: boolean
  dueDate: string
}

export default function TodoTable() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Learn React Hooks', completed: false, dueDate: '2026-04-20' },
    { id: 2, title: 'Build Todo App', completed: true, dueDate: '2026-04-18' },
    { id: 3, title: 'Master TypeScript', completed: false, dueDate: '2026-04-25' },
  ])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Math.max(...todos.map(t => t.id), 0) + 1,
          title: newTodo,
          completed: false,
          dueDate: new Date().toISOString().split('T')[0],
        },
      ])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Todos</h2>

      {/* Add Todo Form */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold"
        >
          Add
        </button>
      </div>

      {/* Todo Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="px-4 py-3 text-left text-gray-700 font-semibold">Status</th>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold">Task</th>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold">Due Date</th>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                  No todos yet. Add one to get started!
                </td>
              </tr>
            ) : (
              todos.map((todo) => (
                <tr
                  key={todo.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="w-5 h-5 text-blue-500 cursor-pointer"
                    />
                  </td>
                  <td className={`px-4 py-3 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {todo.title}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{todo.dueDate}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-300 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-gray-600">
          <span className="font-semibold">{todos.filter(t => t.completed).length}</span> of{' '}
          <span className="font-semibold">{todos.length}</span> tasks completed
        </p>
      </div>
    </div>
  )
}
