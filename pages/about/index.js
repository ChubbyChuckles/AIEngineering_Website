/* eslint-disable */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaDocker,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobelightroom,
  SiAutodesk,
  SiApachenetbeanside, // Placeholder for ANSYS, Creo, etc.
  SiPython,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPrisma,
  SiAmazonaws,
  SiNginx,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  // SiMatlab,
  // SiRproject,
  SiWolfram,
  SiTableau,
  SiMicrosoft,
  SiJira,
  SiTrello,
  SiVisualstudiocode,
  SiJupyter,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 aria-label="HTML5" role="img" />,
          <FaCss3 aria-hidden="true" />,
          <FaJs aria-hidden="true" />,
          <SiTypescript aria-hidden="true" />,
          <FaReact aria-hidden="true" />,
          <SiNextdotjs aria-hidden="true" />,
          <SiFramer aria-hidden="true" />,
          <FaWordpress aria-hidden="true" />,
          <SiNodedotjs aria-hidden="true" />,
          // <SiExpress aria-hidden="true" />,
          // <SiMongodb aria-hidden="true" />,
          // <SiPostgresql aria-hidden="true" />,
          // <SiPrisma aria-hidden="true" />,
          <SiTailwindcss aria-hidden="true" />,
          <SiVisualstudiocode aria-hidden="true" />,
        ],
        // subtitles: [
        //   "HTML5",
        //   "CSS3",
        //   "JavaScript",
        //   "TypeScript",
        //   "React",
        //   "Next.js",
        //   "Framer",
        //   "WordPress",
        //   "Node.js",
        //   "Express",
        //   "MongoDB",
        //   "PostgreSQL",
        //   "Prisma",
        //   "Tailwind CSS",
        //   "VS Code",
        // ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma aria-label="Figma" role="img" />,
          <SiAdobexd aria-hidden="true" />,
        ],
        // subtitles: ["Figma", "Adobe XD"],
      },
      {
        title: "Adobe Suite",
        icons: [
          <SiAdobephotoshop aria-label="Adobe Photoshop" role="img" />,
          <SiAdobeillustrator aria-hidden="true" />,
          <SiAdobeindesign aria-hidden="true" />,
          <SiAdobepremierepro aria-hidden="true" />,
          <SiAdobeaftereffects aria-hidden="true" />,
          <SiAdobelightroom aria-hidden="true" />,
        ],
        // subtitles: [
        //   "Photoshop",
        //   "Illustrator",
        //   "InDesign",
        //   "Premiere Pro",
        //   "After Effects",
        //   "Lightroom",
        // ],
      },
      {
        title: "Engineering Design",
        icons: [
          <SiAutodesk aria-label="AutoCAD" role="img" />,
          <SiAutodesk aria-hidden="true" />,
          <SiApachenetbeanside aria-hidden="true" />,
          <SiApachenetbeanside aria-hidden="true" />,
          // <SiMatlab aria-hidden="true" />,
          <SiApachenetbeanside aria-hidden="true" />,
        ],
        // subtitles: ["AutoCAD", "CATIA", "SolidWorks", "Creo", "MATLAB", "ANSYS"],
      },
      {
        title: "Data Science & AI",
        icons: [
          <SiPython aria-label="Python" role="img" />,
          <SiTensorflow aria-hidden="true" />,
          <SiPytorch aria-hidden="true" />,
          <SiJupyter aria-hidden="true" />,
          // <SiRproject aria-hidden="true" />,
          <SiTableau aria-hidden="true" />,
        ],
        // subtitles: ["Python", "TensorFlow", "PyTorch", "Jupyter", "R", "Tableau"],
      },
      {
        title: "Mathematical Modeling",
        icons: [
          <SiWolfram aria-label="Wolfram" role="img" />,
          <SiMicrosoft aria-hidden="true" />,
        ],
        // subtitles: ["MATLAB", "Mathematica", "R", "Excel"],
      },
      {
        title: "Civil Engineering Design",
        icons: [
          <SiAutodesk aria-label="AutoCAD" role="img" />,
          <SiAutodesk aria-hidden="true" />,
          <SiApachenetbeanside aria-hidden="true" />,
          <SiApachenetbeanside aria-hidden="true" />,
        ],
        // subtitles: ["AutoCAD", "Revit", "STAAD.Pro", "SAP2000"],
      },
      {
        title: "Project Management",
        icons: [
          <SiJira aria-label="Jira" role="img" />,
          <SiTrello aria-hidden="true" />,
          <SiMicrosoft aria-hidden="true" />,
        ],
        // subtitles: ["Jira", "Trello", "MS Project"],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Promotionsstipendium - GradZ",
        stage: "2022 - 2025",
      },
      {
        title: "Deutschlandstipendium",
        stage: "2014 - 2016",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Promotion Dr.-Ing. - Universität Leipzig",
        stage: "2022 - Today",
      },
      {
        title: "M.Eng. Maschinenbau - HTWK Leipzig",
        stage: "2016 - 2020",
      },
      {
        title: "B.Eng. Maschinenbau - HTWK Leipzig",
        stage: "2013 - 2016",
      },
      {
        title: "Dipl.-Ing. Bauingenieurwesen - BA Glauchau",
        stage: "2008 - 2011",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div
      id="main-content"
      className="h-full bg-primary/30 py-32 text-center xl:text-left"
    >
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[200px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mt-12">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I began freelancing as a developer. Since then,
            I&apos;ve done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* projects */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8
              after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 
          items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                  items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div className="text-2xl text-white" key={iconIndex}>
                          {icon}
                          {/* Display subtitle below icon if available */}
                          {item.subtitles && item.subtitles[iconIndex] && (
                            <div className="text-xs text-white/60 mt-1">
                              {item.subtitles[iconIndex]}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
