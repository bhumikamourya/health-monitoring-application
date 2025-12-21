import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");   //  clear token
    alert("You have been logged out!");
    navigate("/login");                 //  redirect to login
  }, [navigate]);

  return null; 
}

export default Logout;
