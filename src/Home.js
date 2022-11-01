import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home__row">
        <Product
          id="12"
          title="Think Like a Monk: Train Your Mind for Peace and Purpose Every Day Hardcover"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41rsAHrKw1L._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="13"
          title="ASUS ROG Strix G15 Gaming Laptop, 15.6” 300Hz 3ms IPS Type FHD Display, NVIDIA GeForce RTX 3050 Ti, AMD Ryzen 7 4800H"
          price={1049.5}
          rating={4}
          image="https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
      <Product
          id="14"
          title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera"
          price={1134}
          rating={3}
          image="https://m.media-amazon.com/images/I/61U6oC65TTL._AC_SX466_.jpg"
        />
        <Product
          id="15"
          title="Scented Candles for Men | Smokey Fireside Scented Candle "
          price={17.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81Q6uj4Kt1L._AC_SX679_.jpg"
        />
        <Product
          id="16"
          title="Nike Men's Killshot 2 Leather Sneaker"
          price={210}
          rating={5}
          image="https://m.media-amazon.com/images/I/61DGNFSqgdL._AC_UX575_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
