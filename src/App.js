import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from './components/Search/Search';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from "./components/NotFound/NotFound";
import ShowCategory from "./components/Category/ShowCategory";
import Footer from "./components/Footer/Footer";
import ShowDetails from "./components/ShowDetails/ShowDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Home />}></Route>
        <Route path="/shop/:id" element={<ShowDetails/>}></Route>
        <Route path="/category" element={<ShowCategory />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
