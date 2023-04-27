import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// todo Components
import AppBar from "./appBar/AppBar";
import PizzaPage from "./pizzaPage/PizzaPage";
import CartPage from "./cartPage/CartPage";
import NotFound from "./notFound/NotFound";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<PizzaPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
