import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/home.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import store from "./store/index.js";
import ContentPage from "./components/content-page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/experiences/",
    element: <App />,
    children: [
      {
        path: "/experiences/",
        element: <Home />,
      },
      {
        path: "/experiences/home",
        element: <Home />,
      },
      {
        path: "/experiences/bit-canteen",
        element: <ContentPage id={1} />,
      },
      {
        path: "/experiences/nescafé",
        element: <ContentPage id={2} />,
      },
      {
        path: "/experiences/piya-milan-chowk",
        element: <ContentPage id={3} />,
      },
      {
        path: "/experiences/aunty-maggie",
        element: <ContentPage id={4} />,
      },
      {
        path: "/experiences/tiger-road",
        element: <ContentPage id={5} />,
      },
      {
        path: "/experiences/deshpande-auditorium",
        element: <ContentPage id={6} />,
      },
      {
        path: "/experiences/baba-ka-dhaba",
        element: <ContentPage id={7} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
