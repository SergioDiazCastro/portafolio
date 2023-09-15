import {Header} from "../../Header/Header"
import projects from "../../../assets/projects";
import { NavLink } from "react-router-dom";
import { Footer } from "../../Footer/Footer"

export const Projects = () => {
  return (
    <>
      <Header></Header>
      <div className="flex justify-center items-center pb-10 pt-10">
        <div className="tarjet flex gap-10 p-6 ">
          {projects.map((project) => (
            <div
              className="bg-[#3A4F50] w-11/12 flex flex-col justify-center py-4 items-center rounded-md"
              key={project.id}
            >
              <h1 className="text-3xl font-semibold p-2 text-[#0EF6CC]">
                {project.title}
              </h1>
              <div className="overflow-hidden">
                <img className="p-2 hover:scale-125 hover:duration-300" src={project.img} alt="projects" />
              </div>
              <h2 className="text-[#F4FEFD] p-2">{project.description}</h2>
              <button className="bg-[#0EF6CC] font-semibold text-lg w-40 rounded-md text-[#1b2223] my-4 hover:bg-white hover:duration-300">
                <NavLink to={project.url} target="_blank">
                  Ver
                </NavLink>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};