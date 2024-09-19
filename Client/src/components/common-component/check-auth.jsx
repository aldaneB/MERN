/**Used to check auth state */

import { Navigate, useLocation } from "react-router-dom";

/**
 *
 * @param {isAuthenticated} param1
 */
function CheckAuth({ isAuthenticated, user, children }) {
  //get current browser path/location
  const location = useLocation();

  //check if user is !authenticated
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    console.log(`${isAuthenticated}`);
    return <Navigate to={"/auth/login"} />;
  }
  //check if user is authenticated
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
    //   console.log(`${isAuthenticated}`);
    //   console.log(`${user?.role}`);
    //   console.log("here");
      //if user is admin, redirect to admin dashboard
      return <Navigate to={"/admin/dashboard"} />;
    } else {
    //   console.log("here too?");
      //if user is not admin, redirect to shopping home
      return <Navigate to={"/shop/home"} />;
    }
  }

  //if user is authenticated and not admin, redirect user to unauth page
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to={"/forbidden-access"} />;
  }

  //if user is authenticated and admin, redirect user to dashboard
  //   if (
  //     isAuthenticated &&
  //     user?.role === "admin" &&
  //     location.pathname.includes("/admin")
  //   ) {
  //     return <Navigate to={"/shop/account"} />;
  //   }

  //   if (user.role === "test") {
  //     console.log(user);
  //     return <Navigate to={"shop/home"} />;
  //   }

  return <>{children}</>;
}

export default CheckAuth;
