import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Search from './components/Search/Search';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
