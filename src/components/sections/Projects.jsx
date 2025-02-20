import PlanifyImg from "../../assets/images/projects/planify.png";
import DishCraftImg from "../../assets/images/projects/dish-craft.png";
import TenziesImg from "../../assets/images/projects/tenzies.png";

import ArrowIcon from "../../assets/icons/Arrow.svg"

import styles from "../../styles/Projects.module.css";

export default function Projects() {
  const style = `${styles["animate-scroll"]} flex `;

  const projects = [
    {
      id: "01",
      type: "Website",
      title: "Planify",
      description:
        "Planify is an intuitive project and task management platform designed to maximize productivity and improve team collaboration.",
      image: PlanifyImg,
      link: "https://planify-teal.vercel.app/",
      languages: ["Next.js", "Tailwind CSS", "Prisma", "MySQL"],
    },
    {
      id: "02",
      type: "Website",
      title: "Dish Craft",
      description: "Dish Craft is a smart recipe generator.",
      image: DishCraftImg,
      link: "https://dish-craft-ai.netlify.app/",
      languages: ["React.js", "SCSS", "AI"],
    },
    {
      id: "03",
      type: "Personal Project",
      title: "Tenzies",
      description: "Web project based on the classic dice game.",
      image: TenziesImg,
      link: "https://tenzies-roller.netlify.app/",
      languages: ["React.js", "SCSS"],
    },
    {
      id: "04",
      type: "Landing Page",
      title: "SoundSphere",
      description: "Landing page of web player",
      link: "https://soundsphere-player.netlify.app/",
      languages: ["Next.js", "Tailwind CSS", "ShadCN"],
    }
  ];

  return (
    <div className="h-fit">
      <div className="pt-10 pb-6 whitespace-nowrap mb-32">
        <div className="relative italic w-fit font-bold text-[32px] md:text-[64px] lg:text-[80px]">
          <div className={style}>
            <h2>RECENT PROJECTS -&nbsp;</h2>
            <h2>RECENT PROJECTS -&nbsp;</h2>
            <h2>RECENT PROJECTS -&nbsp;</h2>
            <h2>RECENT PROJECTS -&nbsp;</h2>

            <h2>RECENT PROJECTS -&nbsp;</h2>
            <h2>RECENT PROJECTS -&nbsp;</h2>
            <h2>RECENT PROJECTS -&nbsp;</h2>
            <h2>RECENT PROJECTS -&nbsp;</h2>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="sticky justify-between top-[64px] h-screen md:h-fit col-span-5 lg:col-span-2 flex flex-col z-10 md:pt-[80px] md:top-0">
          {projects.map(project => (
            <a href={project.link} key={project.id} className="pb-10">
              <div className="relative pt-6 grid grid-cols-6 gap-6 cursor-pointer hover:opacity-100">
                <div className="absolute top-0 bg-dark h-[1px] w-full origin-left opacity-30 duration-700 transition-opacity hover:opacity-100"></div>
                <div className="col-span-3 grid grid-cols-6">
                  <div className="font-medium text-xs">
                    {project.id}
                  </div>
                  <h3 className="col-span-5 text-[14px] font-bold transition-opacity duration-300 leading-[110%] md:text-base opacity-50 ">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[14px] col-span-2 leading-[110%] md:text-[16px]">
                  {project.type}
                </p>
                <div className="flex justify-end pr-4">
                  <div className="relative overflow-hidden h-fit">
                    <img className="size-4" src={ArrowIcon} alt="Arrow icon" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

