import Cookies from "js-cookie";
import React, { useState } from "react";

const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = useState(true); // final should be false
  const [profile, setProfile] = useState(
    JSON.parse(Cookies.get("user-profile") || null)
  );
  return {
    authed,
    profile,
    setProfile,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        setProfile(JSON.parse(Cookies.get("user-profile")));
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        Cookies.remove("user-profile");
        Cookies.remove("login-token");
        res();
      });
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
