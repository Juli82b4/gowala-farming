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

function App() {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/shop", element: <ProductsPage /> },
    { path: "/services", element: <ServiceArticlePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/checkout", element: <CheckoutPage /> },
    { path: "/subscribe", element: <SubscribePage /> },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <div className="app">
      <div className="main">{routes}</div>
    </div>
  );
}

export default App;
