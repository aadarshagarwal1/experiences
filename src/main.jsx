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
        path: "/experiences/place-2",
        element: <ContentPage id={2} />,
      },
      {
        path: "/experiences/place-3",
        element: <ContentPage id={3} />,
      },
      {
        path: "/experiences/place-4",
        element: <ContentPage id={4} />,
      },
      {
        path: "/experiences/place-5",
        element: <ContentPage id={5} />,
      },
      {
        path: "/experiences/place-6",
        element: <ContentPage id={6} />,
      },
      {
        path: "/experiences/place-7",
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
