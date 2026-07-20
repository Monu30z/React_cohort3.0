import React from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid'

const Form = ({setUser,user ,setToggle ,updatedData}) => {
   const {register,handleSubmit,reset,formState:{errors}} = useForm({mode:'onChange', defaultValues: updatedData,})
const formSubmit = (data)=>{

    if(updatedData){

        setUser( (prev)=>{
            return prev.map((val)=>{
                return val.id === updatedData.id ? {...data} : val ;
            })
        })

    }
    else{
        let arr = [...user, {...data , id:nanoid()}]
    setUser(arr)
    localStorage.setItem("user",JSON.stringify(arr))
    }
reset()
setToggle((prev)=> !prev)

}
   
   
  return (
    <div className='flex flex-col items-center gap-5'>
        <h1 className='font-bold text-2xl'>Create User</h1>
        <form onSubmit={handleSubmit(formSubmit)} className=' p-4 w-90 bg-black flex flex-col gap-5 rounded'>
            <input 
            {...register('name',{required:'name Required'})}
           
            className='p-2 outline-0 rounded border-white border' type="text" placeholder='Enter name' />
            {
                errors.name && <p className='text-red-900'>{errors.name.message}</p>
            }
            <input  {...register('email',{required:'email Required',
            pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:'please enter valid email',
            }

            })}
            className='p-2 outline-0 rounded border-white border' type="email" placeholder='Enter email ' />
            {
                errors.email && <p className='text-red-900'>{errors.email.message}</p>
            }
            <input 
             {...register('number',{required:'number Required',
                minLength:{
                    value:10,
                    message:'minimum 10 digit required'
                },
                maxLength:{
                    value:10,
                    message:'maximum 10 digit required'
                }
             })}
            className='p-2 outline-0 rounded border-white border' type="number" placeholder='Enter contact number' />
            {
                errors.number && <p className='text-red-900'>{errors.number.message}</p>
            }
            <input
            {...register('image',{required:'image Required'})}
            className='p-2 outline-0 rounded border-white border' type="url" placeholder='Enter image url' />
            {
                errors.image && <p className='text-red-900'>{errors.image.message}</p>
            }
            <button className='p-2 border border-white rounded bg-blue-500'>Create</button>
        </form>
    </div>
  )
}

export default Form