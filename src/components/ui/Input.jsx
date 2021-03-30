import React from 'react'

const Input = React.forwardRef(({ handle, type, placeholder, name, onKeyDown }, ref) => (

  <div className="flex w-full">
    <input
      onKeyDown={onKeyDown}
      ref={ref}
      name={name}
      type={type}
      onChange={(e) => handle(e.target.value)}
      placeholder={placeholder}
      className="bg-white w-full lg:p-3 p-5 focus:outline-none border-2
         border-gray-400 hover:border-indigo-600 focus:border-indigo-600 text-sm font-poppins" />
  </div>
  
))

export default Input;