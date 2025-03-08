import {
    MOVIES_PAGE,
    DETAILS_PAGE,
    SIGN_IN_PAGE,
    SIGN_UP_PAGE,
    NOT_FOUND,
    LANDING_PAGE,
  } from "../constants/routes";

  import Movies from "../pages/Movies/Movies";
  import Details from "../pages/Details/Details"
  import SignIn from "../pages/SignIn/SignIn";
  import SignUp from "../pages/SignUp/SignUp";
  import Landing from "../pages/Landing/Landing"
  import NotFound from "../pages/NotFound/NotFound";
  
  import AuthGuard from "../Guard/AuthGuard";
  import GustGuard from "../Guard/GustGuard";
  
  
  const routes = [
    {
        path: MOVIES_PAGE,
        Component: Movies,
        Guard: AuthGuard,
    },
    {
        path: DETAILS_PAGE,
        Component: Details,
        Guard: AuthGuard,
    },
    {
        path: SIGN_IN_PAGE,
        Component: SignIn,
        Guard: GustGuard,
    },
    {
        path: SIGN_UP_PAGE,
        Component: SignUp,
        Guard: GustGuard,
    },
    {
        path: LANDING_PAGE,
        Component: Landing,
        Guard: GustGuard,
    },
    {
        path: NOT_FOUND,
        Component: NotFound,
    },
  ];
  
  export default routes;