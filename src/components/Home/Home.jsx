import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { login, isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate()

  const mockApiCall = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "exampleuser" && password === "examplepassword") {
          resolve({ success: true });
        } else {
          reject({ success: false, message: "Invalid username or password" });
        }
      }, 2000);
    });
  };

  const handleLogin = () => {
    mockApiCall("exampleuser", "examplepassword")
      .then((response) => {
        login()
        navigate("/about");
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Home