import Home from "../Home";
import Login from "../Pages/Login/Login";
import NotFound from "../NotFound";
import BlogDetails from "../BlogDetail";

const routes = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
    isPrivate: false,
  },
  {
    path: "/*",
    element: <NotFound />,
    isPrivate: false,
  },
];

export default routes;
