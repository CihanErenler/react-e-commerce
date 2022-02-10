import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../components/Spinner";

const WrapperPage = ({ children }) => {
  const { isLoading, error } = useAuth0;

  if (isLoading) {
    return (
      <div className="w-screen h-screen bg-white flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-scree bg-white flex items-center justify-center">
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default WrapperPage;
