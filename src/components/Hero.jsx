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
            <h1 className="text-3xl lg:text-5xl font-bold mt-6 lg:mt-0">Rusdy Rush</h1>
            <p className="py-6">
            I am a Frontend Engineer with experience in developing modern web applications using the latest technologies. I am skilled in using HTML, CSS, JavaScript, and various frameworks such as React to create responsive and interactive user interfaces. I have a strong interest in UI/UX design and always strive to implement best practices in every project I work on.
            </p>
            <button className="btn btn-primary">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
