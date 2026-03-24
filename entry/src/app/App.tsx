import SignUp from "../imports/SignUp";
import SignIn from "../imports/SignIn";

export default function App() {
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, "");

  if (path.endsWith("/sign-up") || path.endsWith("/signup")) {
    return <SignUp />;
  }

  return <SignIn />;
}
