import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import MainPage from "./Pages/MainPage";
import { useRoutes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import ServiceArticlePage from "./Pages/ServicesPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CheckoutPage from "./Pages/CheckoutPage";
import SubscribePage from "./Pages/SubscribePage";
import ProtectedRoute from "./components/login/ProtectedRoute";
import { useAuthContext } from "./context/useAuthContext";

function App() {
  const { signedIn } = useAuthContext();
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/shop", element: <ProductsPage /> },
    { path: "/services", element: <ServiceArticlePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/checkout", element: <CheckoutPage /> },
    { path: "/subscribe", element: <SubscribePage /> },
    { path: "/login", element: <Login /> },
    {
      path: "/backoffice",
      element: <ProtectedRoute isAllowed={signedIn}>asdasd</ProtectedRoute>,
      children: [
        {
          path: "reviews",
          element: <div>reviews</div>,
        },
        {
          path: "stays",
          element: <div>stays</div>,
        },
        {
          path: "activities",
          element: <div>activities</div>,
          children: [
            {
              path: "add",
              element: <div>add</div>,
            },
            {
              path: "edit/:id",
              element: <div>edit/:id</div>,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <div className="main">{routes}</div>
    </div>
  );
}

export default App;
