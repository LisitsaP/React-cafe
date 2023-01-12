import logo from "./logo.svg";
import "./scss/app.scss";
import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export const SearchContext = React.createContext("");

// import coffees from "./assets/coffee.json";

const coffees = [];
function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue);

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
