import React from 'react'
import { useForm } from 'react-hook-form'

export const Form = () => {
    const {register, handleSubmit, reset} = useForm();
    const submit = (data) => {
        data.preventDefault()
        console.log(data);
        reset();
    };

  return (
    <div>
      <form onSubmit={submit} className='flex justify-between py-7'>
        <div>
          <input className='border rounded-lg py-2 px-7' {...register("title", { required: true })} type="text" />
        </div>
        <div>
          <input className='border rounded-lg py-2 px-7' {...register("description", { required: true })} type="text" />
        </div>
        <button className="px-7 py-1 bg-green-500 rounded-lg">Send</button>
      </form>
    </div>
  );
}
