import { dataList } from "@/data/project-data";
import Image from "next/image";
import React from "react";
import Button from "./Button";

interface ProjectCardProps {
  items: dataList[];
}
const ProjectCard: React.FC<ProjectCardProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index: number) => (
        <div className="bg-white w-[400px] h-[531px] rounded-md p-2 m-2 mx-auto shadow shadow-black" key={index} >
          <Image src={item.image} height={230} width={400} alt="frame" />
          <div>
            <div className="flex">
              <h3 className="font-semibold text-[24px] text-black p-2">
                {item.projectName}
              </h3>
            </div>
            <p className="p-2 text-base text-black text-balance">
              {item.content}
            </p>
          </div>
          <div className="p-2">
            <Button text="View Project" icon="/external-link.png" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
