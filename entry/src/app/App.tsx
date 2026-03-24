import SignUp from "../imports/SignUp";
import SignIn from "../imports/SignIn";

export default function App() {
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, "");
  const hash = window.location.hash.toLowerCase();

  if (hash === "#/sign-up" || hash === "#sign-up" || hash === "#/signup" || hash === "#signup" || path.endsWith("/sign-up") || path.endsWith("/signup")) {
    return <SignUp />;
  }

  return <SignIn />;
}
