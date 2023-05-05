import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        GO TO HOME
      </button>
    </div>
  );
};

export default ErrorPage;
