import { useNavigate } from "react-router-dom";

export const useProtectedNavigate = () => {
  const navigate = useNavigate();

  return (pathIfLoggedIn, pathIfNotLoggedIn = "/login") => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(pathIfLoggedIn);
    } else {
      navigate(pathIfNotLoggedIn);
    }
  };
};