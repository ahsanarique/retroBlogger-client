import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Context } from "../../Context/Context";
import axios from "axios";

const Login = () => {
  const { setLoginStatus, setLoggedInUser } = useContext(Context);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = (data) => {
    const url = "http://localhost:5000/login";

    const userData = {
      email: data.email,
      password: data.password,
    };

    function handleResponse(redirect) {
      if (redirect) {
        history.replace(from);
      }
    }

    function loginUser() {
      axios
        .post(url, userData)
        .then((res) => {
          if (res) {
            setLoginStatus(true);
            handleResponse(true);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }

    setLoggedInUser(userData.email);
    loginUser();
  };

  return (
    <section className="relative min-h-screen md:flex">
      <NavigationBar />
      <div className="mx-5 my-10 grid  grid-cols-12 gap-4 w-full h-80">
        <div className={`col-span-11 bg-white rounded-xl shadow-md`}>
          <form
            onSubmit={handleSubmit(onLoginSubmit)}
            className="mt-8 space-y-6 p-8"
          >
            <div>
              <label htmlFor="email-address" className="font-press-start">
                Email address:{" "}
                {errors.email && <span className="text-red-500">required</span>}
              </label>
              <input
                id="email-address"
                {...register("email", { required: true })}
                type="email"
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div>
              <label htmlFor="password" className="font-press-start">
                Password:{" "}
                {errors.email && <span className="text-red-500">required</span>}
              </label>
              <input
                id="password"
                {...register("password", { required: true })}
                type="password"
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-press-start rounded-md text-white bg-button hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
