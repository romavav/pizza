import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/pages/NotFound";
import { Cart } from "./components/pages/Cart";
import { createContext, useState } from "react";

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
 
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
