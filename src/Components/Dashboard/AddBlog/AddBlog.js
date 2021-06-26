import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Context } from "../../../Context/Context";

const AddBlog = () => {
  const { loggedInUser, setBlogAdded } = useContext(Context);
  const [coverImgURL, setCoverImgURL] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onBlogSubmit = (data) => {
    const url = "https://boiling-sierra-09839.herokuapp.com/addBlog";

    const blogData = {
      email: loggedInUser,
      coverImage: coverImgURL,
      title: data.title,
      mainContent: data.mainContent,
    };

    axios
      .post(url, blogData)
      .then((res) => alert("Blog Added"))
      .catch((error) => alert(error.message));

    setBlogAdded((prev) => prev + 1);
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();

    imageData.set("key", "24e85e60f588cdb7cb95cd39f1c3953b");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => setCoverImgURL(response.data.data.display_url))
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="mx-5 my-10 grid  grid-cols-12 gap-4 w-full">
      <div className={`col-span-11 bg-white rounded-xl shadow-md`}>
        <form
          onSubmit={handleSubmit(onBlogSubmit)}
          className="mt-8 space-y-6 p-8"
        >
          <div>
            <label className="block text-sm font-press-start text-gray-700">
              Add Cover Photo:{" "}
              {errors.fileUpload && (
                <span className="text-red-500">required</span>
              )}
              {coverImgURL && (
                <span className="text-green-500">Image Uploaded</span>
              )}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      {...register("fileUpload", { required: true })}
                      type="file"
                      className="sr-only"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-press-start text-gray-700">
              Add Blog Title:{" "}
              {errors.title && <span className="text-red-500">required</span>}
            </label>
            <textarea
              {...register("title", { required: true })}
              className="resize border rounded-md w-full"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-press-start text-gray-700">
              Add Main Content:{" "}
              {errors.mainContent && (
                <span className="text-red-500">required</span>
              )}
            </label>
            <textarea
              {...register("mainContent", { required: true })}
              rows="30"
              className="resize border rounded-md w-full"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-press-start rounded-md text-white bg-button hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
