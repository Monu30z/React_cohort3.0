import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  return (
    <div className="w-80 bg-gray-300 p-4 rounded">
      <form
onSubmit={handleSubmit((data)=>{
    console.log(data);
    reset()
    
})}
       className="flex flex-col gap-4">
        <input
        {...register("name")}
          className="p-2 border bg-white border-gray-700 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
        {...register("price")}
          className="p-2 border bg-white border-gray-700 rounded"
          type="text"
          placeholder="Product price"
        />

        <input
{...register("category")}
          className="p-2 border bg-white border-gray-700 rounded"
          type="text"
          placeholder="Product Category"
        />
        <input
        {...register("image")}
          className="p-2 border bg-white border-gray-700 rounded"
          type="text"
          placeholder="Product url"
        />
        <button className="border border-gray-600 p-2 rounded bg-blue-500 text-white">
          Create
        </button>
      </form>
    </div>
  );
};

export default RHF;
