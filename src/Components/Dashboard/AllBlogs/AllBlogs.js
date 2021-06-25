import React, { useState, useContext } from "react";
import { Context } from "../../../Context/Context";

const AllBlogs = () => {
  const [blogId, setBlogId] = useState(0);
  const { blogList } = useContext(Context);

  console.log(blogId);

  return (
    <div className="mx-5 my-8  w-full">
      <ul className=" grid  grid-cols-12 gap-4">
        {blogList.map((blog, i) => (
          <li
            key={blog.id + i}
            className="col-span-11 lg:col-span-4 bg-white rounded-xl shadow-md p-5 my-5 text-center"
          >
            <p className="font-press-start">Blog ID: {blog.id}</p>
            <p className="font-quicksand my-5 h-8">{blog.title}</p>
            <button
              onClick={() => setBlogId(blog.id)}
              className=" mb-2 bg-button hover:bg-red-700 text-white font-press-start py-2 px-4 rounded"
            >
              Delete This Blog
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBlogs;
