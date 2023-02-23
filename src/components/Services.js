import React from "react";
import Title from "./Title";
import { services } from "./data";
function Services() {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="our " subtitle="services" />
        <div className="section-center services-center">
         {services.map((service)=>{
          const {id,icon,text,title}=service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
              {text}
                </p>
              </div>
            </article>
          );
         })}

          {/* <article className="service">
            <span className="service-icon">
              <i className="fas fa-tree fa fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">endless hiking</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                illum? Ut dolorem fugit, necessitatibus et aliquid rem pariatur
                delectus doloribus enim ipsa neque reiciendis nobis unde ea
                aliquam assumenda animi.
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i className="fas fa-socks fa fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">amazing comfort</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                illum? Ut dolorem fugit, necessitatibus et aliquid rem pariatur
                delectus doloribus enim ipsa neque reiciendis nobis unde ea
                aliquam assumenda animi.
              </p>
            </div>
          </article> */}
        </div>
      </section>
    </div>
  );
}

export default Services;
