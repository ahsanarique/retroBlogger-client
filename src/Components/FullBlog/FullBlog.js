import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Context } from "../../Context/Context";

const FullBlog = () => {
  const { blogList } = useContext(Context);
  const { id } = useParams();

  const [fullContent, setFullContent] = useState({});

  useEffect(() => {
    if (blogList.length && id) {
      setFullContent(blogList.find((blog) => blog._id === id));
    }
  }, [id, blogList]);

  return (
    <section className="relative min-h-screen md:flex">
      <NavigationBar />
      <div className="mx-5 my-10 grid  grid-cols-12 gap-4">
        <div className={`col-span-12 bg-white rounded-xl shadow-md`}>
          <img
            className="h-48 w-full object-cover "
            src={fullContent.coverImage}
            alt="cover"
          />

          <div className="p-8">
            <div className="block mt-1 text-2xl leading-tight font-press-start text-black">
              {fullContent.title}
            </div>
            <p className="font-quicksand mt-2 text-gray-500">
              {fullContent.mainContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullBlog;
