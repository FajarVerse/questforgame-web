import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/reset.css";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ReviewPage from "./pages/review";
import ContactPage from "./pages/contact";
import Detail from "./pages/detailgame";
import { ScreenshootGameProvider } from "./context/ScreenshotGame";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
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
    {
      path: "/detail-game/:id",
      element: <Detail />,
    },
  ],
  { basename: "/questforgame-web/" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScreenshootGameProvider>
      <RouterProvider router={router} />
    </ScreenshootGameProvider>
  </StrictMode>
);
