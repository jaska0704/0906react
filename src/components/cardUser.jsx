import React from 'react'

export const CardUser = (props) => {
  return  (
    <div className=' px-6 py-3 border border-blue-400 rounded-lg mb-4 flex justify-between'>
        <h1 className='text-[26px]'>{props.lastName}</h1>
        <h2>{props.firstName}</h2>
        <button className='px-7 py-1 bg-red-500 rounded-lg'>delet</button>
    </div>
  )
}
