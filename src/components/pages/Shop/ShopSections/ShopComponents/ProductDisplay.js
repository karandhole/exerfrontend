import React from 'react';
import sample from '../../../../images/categories/sample1.mp4';
import PD1 from '../../../../images/categories/images6.jpg';
import PD2 from "../../../../images/categories/images7.jpg";
import PD3 from "../../../../images/categories/images7.jpg";
import PD4 from "../../../../images/categories/images9.jpg";

export const ProductDisplay = () => {

  return (
    <div id="ProductDisplay" className="py-4">

      <div className='container mx-auto text-center'><h3 className='fw-bolder mt-3 mb-4' > <em>"Stay Connected, Stay Charged: Your Journey, Your Exer Electric Vehicle."</em> </h3></div>

      <div className="row container m-0 p-0 mx-auto justify-content-center">

        <div className='container row col-10 col-md-3 rounded p-0 m-0 pb-3 pb-md-0 pe-md-3'> 

            <div className='col-6 col-md-12 p-0 m-0 container pe-2 pe-md-0 pb-md-2'>

                <div className="image-wrapper h-100 w-100">
                     <img
                       src={PD1}
                       alt=""
                       className="PDimage"
                       height="auto"
                       width="100%"
                     /> 
                     <span className="image-text fw-bold p-2 text-center"> 5000mAh Long-Lasting Battery</span>
                </div> 

            </div>

            <div className='col-6 col-md-12 p-0 m-0 container ps-2 ps-md-0 pt-md-2'>

                <div className="image-wrapper h-100 w-100">
                     <img
                       src={PD2}
                       alt=""
                       className="PDimage"
                       height="auto"
                       width="100%"
                     /> 
                     <span className="image-text fw-bold p-2 text-center"> Ultra-Fast 30-Minute Charging </span>
                </div>   
                                       
            </div>

        </div>

          <div className="container row col-12 col-md-4 p-0 m-0 w-50" id="video-div">
            <div className='container rounded p-0 m-0 h-100 w-100'>
                <video className="videoTag h-100 w-100 rounded" autoPlay loop muted>
                  <source src={sample} type="video/mp4" />
                </video>
            </div>
          </div>

          <div className='container row col-10 col-md-3 rounded p-0 m-0 pt-3 pt-md-0 ps-md-3'>

            <div className='col-6 col-md-12 p-0 m-0 container pe-2 pe-md-0 pb-md-2'>

                <div className="image-wrapper h-100 w-100">
                     <img
                       src={PD3}
                       alt=""
                       className="PDimage"
                       height="auto"
                       width="100%"
                     /> 
                     <span className="image-text fw-bold p-2 text-center"> Advanced Regenerative Braking System </span>
                </div>  
         
            </div>
            <div className='col-6 col-md-12 p-0 m-0 container ps-2 ps-md-0 pt-md-2'>

                <div className="image-wrapper h-100 w-100">
                     <img
                       src={PD4}
                       alt=""
                       className="PDimage"
                       height="auto"
                       width="100%"
                     /> 
                     <span className="image-text fw-bold p-2 text-center"> Lightweight Carbon Fiber Reinforced Frame</span>
                </div>   
                           
            </div>

          </div>

      </div>

      {/* <div className="light-bg-hr">
        <hr />
      </div> */}

    </div>
  );
}
