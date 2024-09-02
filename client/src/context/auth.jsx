import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    // const data = localStorage.getItem("auth");
    async function main() {
      const res = await axios.get("http://localhost:3000/api/v1/auth/me", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const { message, user, token } = res.data;
      console.log("res.data",res.data);
      setAuth({
        ...auth,
        user: user,
        token: token,
      });
    }
    main();
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
