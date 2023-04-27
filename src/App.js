import React, {Fragment} from "react";
import Header from "./components/header/Header";
import HeroSlider from "./components/header/hero-slider/HeroSlider";
import PopularMenu from "./components/header/popular-menu/PopularMenu"
import ChooseUs from "./components/header/choose-us/ChooseUs"
import MenuPack from "./components/menu-pack/MenuPack";
import Testimonials from "./components/Testimonials/Testimonials"
import Download from "./components/download-section/Download";
import Footer from "./components/footer/Footer"
import "./App.css"


function App() {
  return (
    <div className="App">
<Fragment>
<Header/>
<HeroSlider/>
<PopularMenu/>
<ChooseUs/>
<MenuPack/>
<Testimonials/>
<Download/>
<Footer/>
</Fragment>

    </div>
  );
}


export default App;
