"use client";
import React from "react";
import {
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSharp,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    percentage: 89,
  },
  {
    name: "React Js",
    icon: <SiReact />,
    percentage: 92,
  },
  {
    name: "Next Js",
    icon: <SiNextdotjs />,
    percentage: 90,
  },
  {
    name: "Node Js",
    icon: <SiNodedotjs />,
    percentage: 88,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    percentage: 87,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    percentage: 78,
  },
  {
    name: "Python",
    icon: <SiPython />,
    percentage: 88,
  },
  {
    name: "Java",
    icon: <FaJava />,
    percentage: 90,
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
    percentage: 95,
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
    percentage: 80,
  },
  {
    name: "C#",
    icon: <SiSharp />,
    percentage: 82,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 94,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    percentage: 90,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    percentage: 85,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    percentage: 83,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    percentage: 86,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi />,
    percentage: 80,
  },
  {
    name: "Git",
    icon: <SiGit />,
    percentage: 92,
  },
];

const SkillRow = ({
  row,
  reverse = false,
}: {
  row: typeof skills;
  reverse?: boolean;
}) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`skills-marquee ${reverse ? "skills-marquee-left" : "skills-marquee-right"}`}
      >
        {[0, 1].map((copy) => (
          <div className="flex shrink-0 gap-6 pr-6" key={copy}>
            {row.map((skil, i) => {
              return (
                <Tilt
                  key={`${skil.name}-${copy}-${i}`}
                  scale={1.5}
                  transitionSpeed={400}
                >
                  <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                    <div className="text-5xl mb-4 text-gray-300">
                      {skil.icon}
                    </div>
                    <p className="text-2xl font-semibold">{skil.percentage}%</p>
                    <p className="text-purple-400 mt-1">{skil.name}</p>
                  </div>
                </Tilt>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="mt-16 space-y-6">
        <SkillRow row={skills.slice(0, 9)} />
        <SkillRow row={skills.slice(9)} reverse />
      </div>
    </div>
  );
};

export default Skills;
