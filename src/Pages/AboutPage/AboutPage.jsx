import React, { Fragment, useState } from "react";
import "../../Pages/AboutPage/aboutPage.scss";
import TeamCard from "../../assets/images/team-card.png";
import imgae1 from "../../assets/images/backendTeam/image1.jpg"
import imgae2 from "../../assets/images/backendTeam/image2.jpg"
import imgae3 from "../../assets/images/backendTeam/image3.jpg"
import imgae4 from "../../assets/images/backendTeam/image4.jpg"
function AboutPage() {
  const cardDetail = [
    {
      backend_ProfileImage: TeamCard,
      backend_name: "Olivo Rhya",
      backend_fieldName: "BackEnd Developer",
      Backend_description:
        "  ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga nemo harum voluptatum repudiandae accusamus.",
    },
    {
      backend_ProfileImage: imgae1,
      backend_name: "xyz",
      backend_fieldName: "BackEnd Developer",
      Backend_description:
        "  ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga nemo harum voluptatum repudiandae accusamus.",
    },
    {
        backend_ProfileImage: imgae2,
        backend_name: "xyz",
        backend_fieldName: "BackEnd Developer",
        Backend_description:
          "  ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga nemo harum voluptatum repudiandae accusamus.",
      },
      {
        backend_ProfileImage: imgae3,
        backend_name: "xyz",
        backend_fieldName: "BackEnd Developer",
        Backend_description:
          "  ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga nemo harum voluptatum repudiandae accusamus.",
      },
      {
        backend_ProfileImage: imgae4,
        backend_name: "xyz",
        backend_fieldName: "BackEnd Developer",
        Backend_description:
          "  ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga nemo harum voluptatum repudiandae accusamus.",
      },
      {
        backend_ProfileImage: imgae1,
        backend_name: "xyz",
        backend_fieldName: "BackEnd Developer",
        Backend_description:
          "  ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga nemo harum voluptatum repudiandae accusamus.",
      },
  ];
  return (
    <div className="AboutPage-container">
      <div className="aboutPage-heading">
        <h1>Meet Our Team</h1>
      </div>
      <div className="BackendTeam-wrap">
        <div className="backend-heading">
          <h2>Backend Team</h2>
        </div>
        <div className="backend-card-section">
          {/* card */}
          {/* <div className="backend-card-wrap">
            <div className="backendCard-img">
              <div className="img-wrap">
                <img src={TeamCard} alt="" />
              </div>
            </div>
            <div className="backend-card-name">
              <p>Olivo Rhya</p>
            </div>
            <div className="backend-field-name">
              <p>BackEnd Developer</p>
            </div>
            <div className="backend-card-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                harum.
              </p>
            </div>
          </div> */}
          {/* cardOver */}
          {cardDetail.map((value, index) => {
            console.log("value", value);
            return (
              <>
                <div className="backend-card-wrap">
                  <div className="backendCard-img">
                    <div className="img-wrap">
                      <img src={value.backend_ProfileImage} alt="" />
                    </div>
                  </div>
                  <div className="backend-card-name">
                    <p>{value.backend_name}</p>
                    
                  </div>
                  <div className="backend-field-name">
                    <p>{value.backend_fieldName}</p>
                  </div>
                  <div className="backend-card-description">
                    <p>{value.Backend_description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
