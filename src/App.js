import { NewsLetterModal } from "./components/NewsLetterModal";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NewsLetter } from "./components/NewsLetter";
import { Brands } from "./components/Brands";
import { BenefitsBar } from "./components/BenefitsBar";
import { InfoCard } from "./components/InfoCard";
import { Shelf } from "./components/Shelf";
import { FullBanner } from "./components/FullBanner";

import infoCardImageDesktop from "./assets/info-card-image.png";

import infoCardImageMobile from "./assets/info-card-image-mobile.png";

import { banners, bannersMobile } from "./components/FullBanner/banners";
import { items } from "./products/products";

import './App.css';


function App() {
  return (
    <div className="home">
      <NewsLetterModal />

      <Header />

      <FullBanner 
        banners={banners} 
        bannersMobile={bannersMobile} 
      />

      <BenefitsBar title="Por que comprar na Maeztra?"/>

      <Brands title="Marcas Parceiras"/>

      <Shelf title="As Mais Pedidas" items={items}/>

      <InfoCard 
        title="Lorem ipsum" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien." 
        imageDesk={infoCardImageDesktop}
        imageMobile={infoCardImageMobile}
      />
      
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
