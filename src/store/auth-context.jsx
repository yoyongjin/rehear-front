import React, { useState } from "react";

const AuthContext = React.createContext({
  getUserId: (id) => {},
  token: "",
  isLoggedIn: false,
  login: (token) => {
    // AuthPage에서 전달받은 idToken이 매개변수로 동작.
  },
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [nickName, setNickName] = useState("");

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };
  const IdRenderHandler = (nickName) => {
    setNickName(nickName);
  };

  const contextManagedValue = {
    getUserId: IdRenderHandler,
    renderedId: nickName,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextManagedValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
