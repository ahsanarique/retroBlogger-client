import React, { useState, useEffect } from "react";
import fakeData from "../FakeData/Data/FakeData";
import axios from "axios";

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);

  const [blogList, setBlogList] = useState([]);
  const [homepageBlogs, setHomepageBlogs] = useState([]);
  const [blogsPerPage, setBlogsPerPage] = useState(6);
  const [addedBlog, setAddedBlog] = useState({});

  useEffect(() => {
    setBlogList(fakeData);
    setHomepageBlogs(fakeData.slice(0, blogsPerPage));
  }, [blogsPerPage]);

  return (
    <Context.Provider
      value={{
        loginStatus,
        setLoginStatus,
        homepageBlogs,
        setBlogsPerPage,
        blogList,
        setAddedBlog,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
