import React from 'react'

const Input = React.forwardRef(({ handle, type, placeholder, name }, ref) => (
  <div className="flex w-full">
    <input
      ref={ref}
      name={name}
      type={type}
      onChange={(e) => handle(e.target.value)}
      placeholder={placeholder}
      className="bg-white w-full p-2 focus:outline-none border-2
         border-gray-400 hover:border-indigo-600 focus:border-indigo-600 text-sm" />
  </div>
))

export default Input;