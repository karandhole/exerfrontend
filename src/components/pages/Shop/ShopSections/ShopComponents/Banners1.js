import React from "react";
import { Carousel } from "antd";

// banner images
import bannerlg01 from "../../../../images/banners/slider1.jpg";
import bannersm01 from "../../../../images/banners/slider1.jpg";
import bannerlg02 from "../../../../images/banners/slider2.jpg";
import bannersm02 from "../../../../images/banners/slider2.jpg";
import bannerlg03 from "../../../../images/banners/slider3.jpg";
import bannersm03 from "../../../../images/banners/slider3.jpg";

const HeroBanner = () => {

  return (
    <div className=" m-0 p-0 w-100 h-100 mx-auto overflow-hidden ">
      <Carousel dotPosition="right" autoplay effect="fade" autoplaySpeed={3000}>
        <div>
          <img src={bannerlg01} className="img-fluid d-none d-sm-none d-md-block w-100" id="banner" alt="banner" />
          <img src={bannersm01} className="img-fluid d-sm-block d-md-none w-100" id="banner-sm" alt="banner" />
        </div>
        <div>
          <img src={bannerlg02} className="img-fluid d-none d-sm-none d-md-block w-100" id="banner" alt="banner" />
          <img src={bannersm02} className="img-fluid d-sm-block d-md-none w-100" id="banner-sm" alt="banner" />
        </div>
        <div>
          <img src={bannerlg03} className="img-fluid d-none d-sm-none d-md-block w-100" id="banner" alt="banner" />
          <img src={bannersm03} className="img-fluid d-sm-block d-md-none w-100"  id="banner-sm" alt="banner" />
        </div>
      </Carousel>
    </div>
  );
};
export default HeroBanner;
