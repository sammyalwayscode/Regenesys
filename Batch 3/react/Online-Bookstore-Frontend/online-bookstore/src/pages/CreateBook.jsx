import React, { useState } from "react";
import Header from "../component/Header";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import LoadingComp from "../component/Loading/LoadingComp";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const getUserIDFromState = useSelector((state) => state.createdUsers);

  console.log(getUserIDFromState._id);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const uploadNewBook = async (e) => {
    e.preventDefault();

    if (!avatar) {
      Swal.fire("Missing Image", "Please select an Image to upload", "warning");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("summary", summary);
    formData.append("avatar", avatar);
    setLoading(true);
    try {
      await axios.post(
        `https://onlinebook-lb9p.onrender.com/api/store/newbook/${getUserIDFromState?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      //If you are not using an image
      //   await axios.post("https://onlinebook-lb9p.onrender.com/api/store/newbook", {title, author, summary})

      Swal.fire("Success", "Book created Successfully", "success").then(() =>
        navigate("/bookstore")
      );
      //reset form
      setTitle("");
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "An Error Onccoured", "error");
    }
  };
  return (
    <div>
      <Header />
      {loading && <LoadingComp />}
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Add a new book
          </h2>
          <form onSubmit={uploadNewBook}>
            <div className="grid gap-4 sm:grid-cols-1 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Book title
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 "
                  placeholder="Type book title"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="img"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Book Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="img"
                  id="img"
                  onChange={(e) => {
                    setAvatar(e.target.files[0]);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 "
                  placeholder="Upload an Image"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  for="author"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  id="author"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 "
                  placeholder="Author Name"
                  required=""
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Summary
                </label>
                <textarea
                  id="description"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 "
                  placeholder="Your book summary here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200  hover:bg-purple-800"
            >
              Upload Book
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateBook;
