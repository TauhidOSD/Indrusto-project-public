import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ Card }) => {
  return (
    <div>
      <div >
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {Card?.text}
              </h2>
              <p className="dark:text-gray-800">
                {Card?.details}
              </p>
            </div>

            <Link to={`/${Card?.id}`}>
            <button 
              type="button"
              className="bg-pink-500 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              fdprocessedid="led2je"
            >
              Read more
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
