import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Context } from "../../Context/Context";
import Skeleton from "../Skeleton/Skeleton";

const Home = () => {
  const { homepageBlogs, setBlogsPerPage } = useContext(Context);

  return (
    <section className="relative min-h-screen md:flex">
      <NavigationBar />

      <div className="mx-5 my-10 grid  grid-cols-12 gap-4 w-full">
        {homepageBlogs.length === 0 &&
          [0, 1, 2, 3, 4, 5].map((i) => <Skeleton key={i} />)}

        {homepageBlogs.length > 0 &&
          homepageBlogs.map((blog, i) => (
            <div
              key={i + blog._id}
              className={`col-span-12 lg:col-span-4 sm:col-span-6  bg-white rounded-xl shadow-md overflow-hidden`}
            >
              <Link to={`blog=${blog._id}`}>
                <img
                  className="h-48 w-full object-cover"
                  src={blog.coverImage}
                  alt="cover"
                />
              </Link>

              <div className="h-64 overflow-hidden p-8">
                <Link
                  to={`blog=${blog._id}`}
                  className="font-press-start block mt-1 text-md leading-tight font-medium text-black hover:underline"
                >
                  {blog.title}
                </Link>
                <p className="font-quicksand mt-2 text-gray-500">
                  {blog.mainContent}
                </p>
              </div>

              <Link to={`/blog=${blog._id}`}>
                <button className="font-press-start m-5 bg-button hover:bg-hover py-2 px-4 rounded">
                  Read Full Blog
                </button>
              </Link>
            </div>
          ))}

        {homepageBlogs.length > 0 && (
          <button
            onClick={() => setBlogsPerPage((prev) => prev + 3)}
            className="font-press-start m-5 col-span-12 bg-button hover:bg-hover py-2 px-4 rounded"
          >
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default Home;
