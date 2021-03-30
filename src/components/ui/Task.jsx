import React from 'react'

const Task = ({ del, status, update, children }) => (

  <div
    className={`font-medium lg:p-3 p-5 text-sm font-poppins flex justify-between items-center text-gray-500 select-none
    ${status ? `bg-indigo-100` : `bg-gray-100`}`}>
    <div className="flex items-center">
      <div onClick={update} className={`h-6 w-6 mr-4 rounded-full cursor-pointer ${status ? `bg-indigo-500` : `bg-gray-300`}`}></div>
      {children}
    </div>
    <div onClick={del} className="text-gray-500 h-full cursor-pointer hover:text-red-500">
      <i className='bx bx-sm bx-trash'></i>
    </div>
  </div>

)

export default Task;
