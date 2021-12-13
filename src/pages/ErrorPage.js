import React from "react";
import Button from "../components/Button";
import error from "../assets/404.png";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="h-screen flex items-center justify-center flex-col">
        <h1 className="text-9xl text-slate-600 mb-8">404</h1>
        {/* <img src={error} alt="error" className="w-1/5" /> */}
        <h4 className="text-xl mb-8">
          The page you are trying to access does not exist
        </h4>
        <Button text="Back to home page" to="/" />
      </div>
    </div>
  );
};

export default ErrorPage;
