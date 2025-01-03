import React from 'react';
import '../../Shop.css';

import HeroBanner from '../ShopComponents/Banners1';
import { ExploreCategories } from '../ShopComponents/ExploreCategories';
import IconsCarousel from "../ShopComponents/IconsCarousel.js";
import ProductListCarousel from "../ShopComponents/ProductListCarousel.js";
import TrendingNowCarousel from "../ShopComponents/TrendingNowCarousel.js";
import {ProductDisplay} from '../ShopComponents/ProductDisplay.js';
import {BrandPartners} from '../ShopComponents/BrandPartners.js';
// import FeedBack from '../../../HomePage/HomePageSections/feedback/FeedBack.js';
import FAQ from '../../../HomePage/HomePageSections/FAQ/FAQ.js';
import { useShop } from '../../ShopContext.js';
import { ShopHeader } from '../../../../sections/header/ShopHeader.js';



function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function ShopHomePage() {
  
  const {products} = useShop();

  const EScooter = shuffle(
    products.filter(
      (product) => product.subcategory === "Active-Series"
    )
  ).slice(0, 5);
  
  const EScooter1 = shuffle(
    products.filter(
      (product) => product.bestSeller && product.subcategory === "Speed-Series"
    )
  ).slice(0, 5);

  const Ebycycle= shuffle(
    products.filter(
      (product) => product.category === "E-Bicycle"
    )
  ).slice(0,5);

  return (
    <>
      <HeroBanner />

      <ExploreCategories />

      <IconsCarousel />

      <ProductListCarousel
        title="Active-series"
        product_list={EScooter}
        path="/shop/e-scooter"
      />

      <TrendingNowCarousel />

      <ProductListCarousel
        title="Speed Series"
        product_list={EScooter1}
        path="/shop/e-scooter"
      />

      <ProductDisplay />

      <ProductListCarousel 
        title='Cargo-series'
        product_list={Ebycycle}
        path='/shop/e-bycycle'
      />

      <BrandPartners />

      {/* <FeedBack /> */}

      <FAQ />
    </>
  );
}
