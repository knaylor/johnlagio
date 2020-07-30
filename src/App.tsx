import React, { useEffect, useState } from "react";
import "./styles/johnllagio-tailwind.css";
import Banner from "./components/banner"
import Navigation from "./components/navigation";
import Home from "./components/home";
import Management from "./components/management";
import Ammenities from './components/amenities';
import Food from './components/food';


function App() {
  const [page, setPage] = useState("home");
  const updatePage = (newPage: string): void => {
    setPage(newPage);
  };

  const [view, setView] = useState(<Home />)
  useEffect(() => {
    switch(page) {
      case "amenities":
        setView(<Ammenities/>)
        break;
      case "home":
        setView(<Home/>)
        break;
      case "management":
        setView(<Management/>)
        break;
      case "food":
        setView(<Food/>)
        break;
      default:
        setView(<Home/>)
    }
  }, [page])

  return (
    <div className="container mx-auto flex flex-col">
      <Banner className="" />
      <Navigation page={page} updatePage={updatePage} />
      <div className="container flex">
        {view}
      </div>
    </div>
  );
}

export default App;
