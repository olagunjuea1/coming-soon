import Header from "./components/Header";
import Herobody from "./components/Herobody";
import Herofoot from "./components/Herofoot";

function Hero() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between gap-10 overflow-hidden relative">
      <div className="hero_gradient_default"></div>
      <div className="hero_gradient_default_dark"></div>
      <Header />
      <Herobody />
      <Herofoot />
    </div>
  );
}

export default Hero;
