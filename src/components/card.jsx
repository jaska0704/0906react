import React from 'react'

export const Card = (props) => {
  return (
    <div className=' px-6 py-3 border border-blue-400 rounded-lg mb-4 flex justify-between'>
        <h1>{props.title}</h1>
        <button className='px-7 py-1 bg-red-500 rounded-lg'>delet</button>
    </div>
  )
}
