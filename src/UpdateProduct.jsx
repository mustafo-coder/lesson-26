import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateProductMutation } from "./service/api";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [updateProduct, { isLoading }] =
    useUpdateProductMutation();

  const submitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const res = await updateProduct(id, {title})
    navigate(`/product/${id}`)
    
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
