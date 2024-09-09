import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ReviewPage from "./pages/review";
import ContactPage from "./pages/contact";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <ContactPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/review",
      element: <ReviewPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ],
  { basename: "/questforgame-web/" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
