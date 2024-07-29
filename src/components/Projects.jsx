import React from "react";
import youtubeClone from "../../public/renstube.png";
import netflixClone from "../../public/netflix.png";
import spacePort from "../../public/spaceportofolio.png";
import portofolio from "../../public/rensport.png";
import geminiClone from "../../public/rensbotai.png";
import edusityAnjay from "../../public/edusity.png";

const Projects = () => {
  return (
    <div className="bg-base-200 h-full mb-20 mt-20">
      <div>
        <h1 className="flex justify-center items-center font-bold text-2xl mb-10">
          My Projects
        </h1>
      </div>
      <div className="ml-12 mr-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img src={youtubeClone} alt="Youtube Clone" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Youtube Clone</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="#">
                <button className="btn btn-primary">Visit Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img src={netflixClone} alt="Netflix Clone" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Netflix Clone</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="#">
                <button className="btn btn-primary">Visit Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img src={geminiClone} alt="Gemini Clone" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gemini Clone</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="#">
                <button className="btn btn-primary">Visit Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img src={spacePort} alt="Space Portfolio" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Space Portfolio</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="#">
                <button className="btn btn-primary">Visit Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img src={portofolio} alt="Simple Portfolio" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Simple Portfolio</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="#">
                <button className="btn btn-primary">Visit Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img src={edusityAnjay} alt="Edusity" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Edusity</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="#">
                <button className="btn btn-primary">Visit Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
