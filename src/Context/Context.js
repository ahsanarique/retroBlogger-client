import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const [blogList, setBlogList] = useState([]);
  const [blogAdded, setBlogAdded] = useState(0);
  const [homepageBlogs, setHomepageBlogs] = useState([]);
  const [blogsPerPage, setBlogsPerPage] = useState(6);

  useEffect(() => {
    const url = "http://localhost:5000/blogList";

    axios.get(url).then((res) => setBlogList(res.data));
  }, [blogAdded]);

  useEffect(() => {
    setHomepageBlogs(blogList.slice(0, blogsPerPage));
  }, [blogList, blogsPerPage, blogAdded]);

  return (
    <Context.Provider
      value={{
        loginStatus,
        setLoginStatus,
        loggedInUser,
        setLoggedInUser,
        homepageBlogs,
        setBlogsPerPage,
        blogList,
        setBlogList,
        setBlogAdded,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
