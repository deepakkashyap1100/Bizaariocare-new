
import "../assets/css/NewsAndArticles.css"; // We'll put the styles here

import React, { useState } from "react";
import { cardsData } from "../Data/LocalData";



const NewsAndArticles = () => {
  const [activeCategory, setActiveCategory] = useState("cardiology");

  const categories = [
    { key: "cardiology", label: "Cardiology" },
    { key: "orthopedics", label: "Orthopedics" },
    { key: "pediatrics", label: "Pediatrics" },
    { key: "neurology", label: "Neurology" },
    { key: "obgyn", label: "Obstetrics & Gynecology" },
    { key: "ent", label: "Otorhinolaryngology" },
    { key: "plastic", label: "Plastic & Reconstructive" }
  ];


  const filteredCards =
    activeCategory === "all"
      ? cardsData
      : cardsData.filter((card) => card.category === activeCategory);

  return (
    <section className="spacing-top">  
    <div className="news-section container">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <h2 className="fw-semibold ">News And Articles</h2>
          <p className= "light-color lmb-0">
            Learn from leading doctors and specialists through focused,
            digestible video content.
          </p>
        </div>
        <button
          className="btn common-btn-dark"
          onClick={() => setActiveCategory("all")}
        >
          View All
        </button>
      </div>

      {/* Tabs */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`btn btn-sm rounded-pill px-3 ${
              activeCategory === cat.key
                ? "btn-primary text-white"
                : "btn-light text-dark"
            }`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

        <div className="content-style">
          
    
      <div className="row g-3">
        {filteredCards.map((card, index) => (
          <div className="col-lg-4 col-md-6 col-12 mb-md-0 mb-3" key={index}>
            <div className="card border-0 shadow-sm h-100 rounded-4 p-3">
              <img
                src={card.img}
                className="card-img-top "
                alt={card.title}
              />
              <div className="pt-3">
                <h4 className="fw-bold">{card.title}</h4>
                <p className=" small mb-1 light-color">
                  If you ask yourself what are some of your deal-breakers, AKA
                  non-negotiables, when it comes to dating, there can be a lot
                  of things ranging...
                       <a href="#" className="ms-4 fw-semi-bold read-more-btn  text-decoration-none" >
                  Read More
                </a>
                </p> 
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
      </section>
  );
};

export default NewsAndArticles;
