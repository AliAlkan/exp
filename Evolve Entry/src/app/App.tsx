import SignUp from "../imports/SignUp";
import SignIn from "../imports/SignIn";

export default function App() {
  const path = window.location.pathname.toLowerCase();

  if (path === "/sign-up" || path === "/signup") {
    return <SignUp />;
  }

  return <SignIn />;
}
