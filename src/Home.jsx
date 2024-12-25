import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "./service/api";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading, error } =
    useGetAllProductsQuery();
  if (error) return <div>Error!</div>;
  return (
    <div>
      <h1 className="text-4xl text-gray-800 font-bold text-center mt-5 mb-10">
        Products
      </h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {data.products.map((d) => (
            <Link
              to={`/product/${d.id}`}
              className="p-3 bg-slate-200"
              key={d.id}
            >
              {d.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
