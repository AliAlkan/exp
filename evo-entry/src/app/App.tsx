import { useEffect, useState } from "react";
import SignUp from "../imports/SignUp";
import SignIn from "../imports/SignIn";
import { getAuthScreen } from "./authRoute";

export default function App() {
  const [screen, setScreen] = useState(() => getAuthScreen());

  useEffect(() => {
    const syncScreen = () => {
      setScreen(getAuthScreen());
    };

    window.addEventListener("hashchange", syncScreen);
    window.addEventListener("popstate", syncScreen);

    return () => {
      window.removeEventListener("hashchange", syncScreen);
      window.removeEventListener("popstate", syncScreen);
    };
  }, []);

  if (screen === "sign-up") {
    return <SignUp />;
  }

  return <SignIn />;
}
