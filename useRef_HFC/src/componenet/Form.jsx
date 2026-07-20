import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Form = () => {
  console.log("rendring.....");

  // const [formData,setFormData]=useState({})

//   const nameRef = useRef(null);
//   const priceRef = useRef(null);
//   const categoryRef = useRef(null);
//   const imageRef = useRef(null);

const [product, setProduct] = useState({})
console.log(product);

const formRef = useRef({})

console.log(formRef);

  const handleSumit = (e) => {
    e.preventDefault();
//    console.log(nameRef.current.value);
//    console.log(priceRef.current.value);
//    console.log(categoryRef.current.value);
//    console.log(imageRef.current.value);

console.log(formRef.current.productName.value);
console.log(formRef.current.productCategory.value);
console.log(formRef.current.productPrice.value);
console.log(formRef.current.productImage.value);

let obj = {
    pName : formRef.current.productName.value,
    pCategory :formRef.current.productCategory.value,
    pPrice :formRef.current.productPrice.value,
    pImage :formRef.current.productImage.value,

}

setProduct(obj);

   
  };
  return (
    <div className="w-80 bg-gray-300 p-4 rounded">
      <form onSubmit={handleSumit} className="flex flex-col gap-4">
        <input
        //    ref={nameRef }
        ref={(e)=> formRef.current.productName = e}

        //   onChange={(e) => {
        //     setFormData({ ...formData, productName: e.target.value });
        //   }}
          className="p-2 border bg-white border-gray-700 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
        // ref={priceRef}
                ref={(e)=> formRef.current.productPrice = e}

        //   onChange={(e) => {
        //     setFormData({ ...formData, productPrice: e.target.value });
        //   }}
          className="p-2 border bg-white border-gray-700 rounded"
          type="text"
          placeholder="Product price"
        />
        <span>Select category</span>
        <select
          className="p-2 border border-gray-700 rounded bg-white"
        //   ref={categoryRef}
                ref={(e)=> formRef.current.productCategory = e}

        //   onChange={(e) => {
        //     setFormData({ ...formData, Category: e.target.value });
        //   }}
        >
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
        // ref={imageRef}
                ref={(e)=> formRef.current.productImage = e}

        //   onChange={(e) => {
        //     setFormData({ ...formData, productUrl: e.target.value });
        //   }}
          className="p-2 border bg-white border-gray-700 rounded"
          type="url"
          placeholder="Product url"
        />
        <button className="border border-gray-600 p-2 rounded bg-blue-500 text-white">
          Create
        </button>
      </form>

      <h1>{product.pName}</h1>
      <h1>{product.pCategory}</h1>
      <h1>{product.pPrice}</h1>
      <h1>{product.pImage}</h1>
    </div>
  );
};

export default Form;
