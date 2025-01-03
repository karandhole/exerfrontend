import React from "react";
import { RiQuestionAnswerLine } from "react-icons/ri";


export default function FAQ() {
  return (
    <>
      <section id="FAQ-section">
        <div className=" row container mx-auto">
          <div className="col-8 mx-auto mb-4 mt-5 text-center">
            <h3 className="mb-3 mt-49  ">
              {/* <span className="material-symbols-outlined fs-1 align-middle">
                quiz
              </span> */}
              <RiQuestionAnswerLine />
              &nbsp; Frequently asked questions
            </h3>
            <p>
              overall, Exer Energy provide users with convenient access to
              essential information
            </p>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="accordion " id="accordionExample">
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                 What is the range of Exer Energy electric scooters on a full charge?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Our scooters offer a range of up to 120 km on a full charge, depending on the model and riding conditions.


                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                   How long does it take to charge the battery?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Charging takes 4–6 hours with a standard charger, and 2–3 hours with a fast charger.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                 Where can I charge my Exer Energy scooter?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                You can charge it at home using a standard outlet or at public EV charging stations.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Are Exer Energy scooters waterproof?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Yes, our scooters are designed to be water-resistant and can handle rainy conditions.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is the warranty on the battery?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                We provide a 3-year warranty on the battery, ensuring long-term performance and reliability.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="light-bg-hr">
          <hr />
        </div>
      </section>
    </>
  );
}
