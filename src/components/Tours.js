import React from "react";
import Title from "./Title";
import {tours} from "./data";
function Tours() {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="Featured " subtitle="tours" />
        <div className="section-center featured-center">
          {tours.map((tour)=>{
            const {id,src,date,title,text,iconText,days,price}=tour;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img
                    src={src}
                    className="tour-img"
                    alt="tour"
                  />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>
                   {text}
                  </p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map">{iconText}</i> 
                      </span>
                    </p>
                  <p>{days}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Tours;
