"use client"

import React from 'react'

type TodoItemProps = {
  id: string,
  title: string,
  completed: boolean,
  toggleTodo: (id: string, completed: boolean) => void
}

export function TodoItem({id, title, completed ,toggleTodo}:TodoItemProps) {
  return (
    <li className='flex gap-1 items-center'>
      <input 
        id={id} 
        type='checkbox' 
        className='cursor-pointer peer'
        defaultChecked={completed}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label 
        htmlFor={id} 
        className='peer-checked:line-through cursor-pointer
        peer-checked:text-slate-500'
      >
        {title}
      </label>
    </li>
  )
}
