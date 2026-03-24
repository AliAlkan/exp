export type AuthScreen = "sign-in" | "sign-up";

function normalizeRoute(route: string) {
  return route.replace(/^#\/?/, "").replace(/^\/+|\/+$/g, "").toLowerCase();
}

export function getAuthScreen(location: Pick<Location, "hash" | "pathname"> = window.location): AuthScreen {
  const hashRoute = normalizeRoute(location.hash);
  if (hashRoute === "sign-up" || hashRoute === "signup") {
    return "sign-up";
  }

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = normalizeRoute(pathSegments[pathSegments.length - 1] ?? "");
  if (lastSegment === "sign-up" || lastSegment === "signup") {
    return "sign-up";
  }

  return "sign-in";
}

export function navigateToAuthScreen(screen: AuthScreen) {
  const targetHash = screen === "sign-up" ? "#sign-up" : "#sign-in";
  if (window.location.hash === targetHash) {
    return;
  }

  window.location.hash = targetHash;
}
