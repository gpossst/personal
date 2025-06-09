import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiSupabase,
  SiExpo,
  SiTypescript,
  SiGooglegemini,
  SiOpenai,
  SiDrizzle,
  SiPandas,
  SiPytorch,
  SiNumpy,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSwift,
  FaApple,
  FaReact,
  FaNodeJs,
  FaMobile,
  FaLaptop,
  FaPython,
} from "react-icons/fa";

import { Terminal } from "lucide-react";

export default function Timeline({
  handleOpenProject,
}: {
  handleOpenProject: (project: string) => void;
}) {
  return (
    <div className="flex pl-4 md:pl-10 w-full md:w-auto md:pt-8">
      <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full max-w-2xl">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2022
          </time>
          <h3
            className="text-lg font-semibold text-red-500 cursor-pointer break-words"
            onClick={() => handleOpenProject("The Odin Project")}
          >
            The Odin Project
          </h3>
          <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
            Introduction to code
          </p>
          <div className="flex flex-row gap-2 flex-wrap">
            <FaHtml5 className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
            <FaCss3 className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
            <FaJs className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
          </div>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2024
          </time>
          <div className="flex flex-col gap-8 mb-10">
            <div>
              <h3
                className="text-lg flex items-center gap-2 font-semibold text-red-500 cursor-pointer"
                onClick={() => handleOpenProject("Clariphoto")}
              >
                Clariphoto{" "}
                <span className="">
                  <FaMobile />
                </span>
              </h3>
              <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                First published project
              </p>
              <div className="flex flex-row gap-2 flex-wrap">
                <FaSwift className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <FaApple className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            <div>
              <h3
                className="text-lg flex items-center gap-2 font-semibold text-red-500 cursor-pointer"
                onClick={() => handleOpenProject("Playlist Transfers")}
              >
                Playlist Transfers{" "}
                <span className="">
                  <FaLaptop />
                </span>
              </h3>
              <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                First web app
              </p>
              <div className="flex flex-row gap-2 flex-wrap">
                <FaReact className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <FaNodeJs className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiNextdotjs className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiTailwindcss className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiTypescript className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            <div>
              <h3
                className="text-lg font-semibold flex items-center gap-2 text-red-500 cursor-pointer"
                onClick={() => handleOpenProject("Reformify")}
              >
                Reformify{" "}
                <span className="">
                  <FaLaptop />
                </span>
              </h3>
              <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                Simplifying form creation
              </p>
              <div className="flex flex-row gap-2 flex-wrap">
                <FaReact className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiNextdotjs className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiTailwindcss className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiMongodb className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiTypescript className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2025
          </time>
          <div className="flex flex-col gap-8 mb-10">
            <div>
              <h3
                className="text-lg font-semibold flex items-center gap-2 text-red-500 cursor-pointer"
                onClick={() => handleOpenProject("Spontaneous")}
              >
                Spontaneous{" "}
                <span className="">
                  <FaLaptop />
                </span>
              </h3>
              <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                Same-day lift tickets
              </p>
              <div className="flex flex-row gap-2 flex-wrap">
                <FaReact className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiNextdotjs className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiTailwindcss className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiSupabase className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiTypescript className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            <div>
              <h3
                className="text-lg font-semibold flex items-center gap-2 text-red-500 cursor-pointer"
                onClick={() => handleOpenProject("National Parks")}
              >
                National Parks{" "}
                <span className="">
                  <FaMobile />
                </span>
              </h3>
              <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                National Parks Checklist
              </p>
              <div className="flex flex-row gap-2 flex-wrap">
                <SiExpo className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <FaReact className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiTailwindcss className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <SiSupabase className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
                <FaPython className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            <div>
              <h3
                className="text-lg font-semibold flex items-center gap-2 text-red-500 cursor-pointer"
                onClick={() => handleOpenProject("Robin (Unfinished)")}
              >
                Robin (Unfinished){" "}
                <span className="">
                  <FaLaptop />
                </span>
              </h3>
              <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                AI Note Taker
              </p>
              <div className="flex flex-row gap-2">
                <FaReact className="text-gray-500 w-8 h-8" />
                <SiNextdotjs className="text-gray-500 w-8 h-8" />
                <SiTailwindcss className="text-gray-500 w-8 h-8" />
                <SiDrizzle className="text-gray-500 w-8 h-8" />
                <SiTypescript className="text-gray-500 w-8 h-8" />
                <SiGooglegemini className="text-gray-500 w-8 h-8" />
                <SiOpenai className="text-gray-500 w-8 h-8" />
              </div>
            </div>
            <div>
              <h3
                className="text-lg font-semibold flex items-center gap-2 text-red-500 cursor-pointer whitespace-nowrap"
                onClick={() => {
                  handleOpenProject("Better Job Board (Unfinished)");
                  console.log("clicked");
                }}
              >
                Better Job Board (Unfinished){" "}
                <span className="">
                  <FaLaptop />
                </span>
              </h3>
              <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                Fixing SWE Recruiting
              </p>
              <div className="flex flex-row gap-2">
                <FaReact className="text-gray-500 w-8 h-8" />
                <SiNextdotjs className="text-gray-500 w-8 h-8" />
                <SiTailwindcss className="text-gray-500 w-8 h-8" />
                <SiDrizzle className="text-gray-500 w-8 h-8" />
                <SiTypescript className="text-gray-500 w-8 h-8" />
              </div>
            </div>
            <div>
              <h3
                className="text-lg font-semibold flex items-center gap-2 text-red-500 cursor-pointer whitespace-nowrap"
                onClick={() => handleOpenProject("Sports Prediction ML Models")}
              >
                Sports Prediction AI Models{" "}
                <span className="">
                  <Terminal />
                </span>
              </h3>
              <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                Learning ML Models
              </p>
              <div className="flex flex-row gap-2">
                <FaPython className="text-gray-500 w-8 h-8" />
                <SiPandas className="text-gray-500 w-8 h-8" />
                <SiPytorch className="text-gray-500 w-8 h-8" />
                <SiNumpy className="text-gray-500 w-8 h-8" />
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
