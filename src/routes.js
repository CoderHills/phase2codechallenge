import App from "./App";
import Home from "./pages/Home";
import AddGoal from "./pages/AddGoal";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-goal", element: <AddGoal /> }
    ]
  }
];

export default routes;
