import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Abhishek Katara",
  title: "Full Stack Developer",
  social: {
    github: "https://github.com/abhishekkatara",
    linkedin: "https://www.linkedin.com/in/abhishekkatara",
    twitter: "https://twitter.com/katara_abhi",
    email: "katara.abhishek7@gmail.com",
  },
  about: {
    title: "My Background",
    description:
    ""
  },
  skills: [
    {
      skillName: "Node JS",
      skillIcon: ''//<FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "System Design",
      skillIcon: ''//<FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Angular",
      skillIcon: ''//<FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
        skillName: "JS",
        skillIcon: ''//<FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
        skillName: "Angular",
        skillIcon: ''//<FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
        skillName: "Angular",
        skillIcon: ''//<FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
        skillName: "Angular",
        skillIcon: ''//<FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Angular",
      skillIcon: ''//<FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Angular",
      skillIcon: ''//<FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Angular",
      skillIcon: ''//<FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/abhishekkatara/abhishek.katara"
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      link: "https://github.com/abhishekkatara/abhishek.katara"
    }
  ]
};
export default data;