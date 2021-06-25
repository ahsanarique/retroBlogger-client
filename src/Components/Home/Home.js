import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Context } from "../../Context/Context";

const Home = () => {
  const { homepageBlogs, setBlogsPerPage } = useContext(Context);

  return (
    <section className="relative min-h-screen md:flex">
      <NavigationBar />

      <div className="mx-5 my-10 grid  grid-cols-12 gap-8">
        {homepageBlogs.map((blog, i) => (
          <div
            key={i + blog.id}
            className={`col-span-12 lg:col-span-4 sm:col-span-6  bg-white rounded-xl shadow-md overflow-hidden`}
          >
            <Link to={`blog=${blog.id}`}>
              <img
                className="h-48 w-full object-cover "
                src={blog.coverImage}
                alt="cover"
              />
            </Link>

            <div className="h-64 overflow-hidden p-8">
              <Link
                to={`blog=${blog.id}`}
                className="font-press-start block mt-1 text-md leading-tight font-medium text-black hover:underline"
              >
                {blog.title}
              </Link>
              <p className="font-quicksand mt-2 text-gray-500">{blog.blog}</p>
            </div>

            <Link to={`/blog=${blog.id}`}>
              <button className="font-press-start m-5 bg-button hover:bg-hover py-2 px-4 rounded">
                Read Full Blog
              </button>
            </Link>
          </div>
        ))}

        <button
          onClick={() => setBlogsPerPage((prev) => prev + 3)}
          className="font-press-start m-5 col-span-12 bg-button hover:bg-hover py-2 px-4 rounded"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default Home;
