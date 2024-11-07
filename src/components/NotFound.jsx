import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex justify-center items-center flex-col text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl text-primary/80 text-g mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/80 duration-300"
      >
        Go Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
