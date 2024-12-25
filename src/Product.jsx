import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "./service/api";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, error } =
    useGetSingleProductQuery(id);

  if (error) return <div>Error!</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <Link to={"/"} className="fixed top-2 start-2">
        Back
      </Link>
      <div className="max-w-[600px] p-10 shadow rounded">
        <img
          src={data.images[0]}
          alt="product"
          width={400}
        />
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <p className="opacity-70">{data.description}</p>
        <h3 className="text-2xl font-bold">
          ${data.price}
        </h3>
        <Link
          to={`/update-product/${id}`}
          className="px-5 py-3 bg-green-400 mt-5 inline-block rounded"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default Product;
