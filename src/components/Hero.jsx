import React from "react";
import heroSection from '../../public/alex.jpg';

const Hero = () => {
  return (
    <div className="mb-20">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:ml-20 lg:mr-20 px-4 lg:px-0">
          <img
            src={heroSection}
            className="max-w-full lg:max-w-sm rounded-lg shadow-2xl"
            alt="Hero Section"
          />
          <div className="text-center lg:text-left lg:mr-10">
            <h1 className="text-3xl lg:text-5xl font-bold mt-6 lg:mt-0">Rendy Agus S, S. TI.</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
