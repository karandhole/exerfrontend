import React from "react";
import { Link } from "react-router-dom";
import ScrollToTopLink from '../../../../component/ScrollToTopLink';

// images
import smartWatchCategoriesBanner from "../../../../images/Products/P-1/image1.jpg";
import wirelessTWSCategoriesBanner from "../../../../images/categories/images6.jpg";
import accessoriesCategoriesBanner from "../../../../images/categories/images7.jpg";
import soundBarsCategoriesBanner from "../../../../images/categories/images9.jpg";

export const ExploreCategories = () => {
  return (
    <div id="ExploreCategories" className="pt-4 pb-3">
      <div className="container mb-4">
        <h2 className="Shop-Heading"> Explore Categories</h2>
      </div>

      <div className="container p-0 px-md-4 px-5 mb-4">
        <div className="row mx-auto justify-content-center">
          <div className="container col-12 col-md-6 m-0 p-0 pb-2 pb-md-0 pe-md-2">
            <ScrollToTopLink to='E-Scooter' >
              <div className="image-wrapper h-100 w-100" data-aos="zoom-in">
                <img
                  src={smartWatchCategoriesBanner}
                  alt=""
                  className="shadow categoryBackgroundImage"
                  height="auto"
                  width="100%"
                />
                <span className="image-text fw-bold p-2 "> Exterior Design </span>
              </div>
            </ScrollToTopLink>
          </div>
          <div className="container col-12 col-md-6 m-0 p-0 pt-2 pt-md-0 ps-md-2 ">
            <div className="row container m-0 p-0 pb-2 ">
              <div className="col-6 p-0 m-0 pe-2">
                <ScrollToTopLink to='wireless'>
                  <div className="image-wrapper h-100 w-100" data-aos="zoom-in">
                    <img
                      src={wirelessTWSCategoriesBanner}
                      alt=""
                      className="shadow categoryBackgroundImage"
                    />
                    <span className="image-text fw-bold p-2"> Interior Features </span>
                  </div>
                </ScrollToTopLink>
              </div>
              <div className="col-6 m-0 p-0 ps-2">
                <ScrollToTopLink to='accessories'>
                  <div className="image-wrapper h-100 w-100" data-aos="zoom-in">
                    <img
                      src={accessoriesCategoriesBanner}
                      alt=""
                      className="shadow categoryBackgroundImage "
                    />
                    <span className="image-text fw-bold p-2"> Performance and Technology </span>
                  </div>
                </ScrollToTopLink>
              </div>
            </div>
            <div className="col container m-0 p-0 pt-2">
              <ScrollToTopLink to='sound-bars'>
                <div className="image-wrapper h-100 w-100" data-aos="zoom-in">
                  <img
                    src={soundBarsCategoriesBanner}
                    alt=""
                    className="shadow categoryBackgroundImage "
                  />
                  <span className="image-text fw-bold p-2"> Charging and Sustainability </span>
                </div>
              </ScrollToTopLink>
            </div>
          </div>
        </div>
      </div>

      <div className="light-bg-hr">
        <hr />
      </div>
    </div>
  );
};
