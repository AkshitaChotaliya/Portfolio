import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Developed a new user workflow system for User Management, enhancing the purchasing experience by implementing front-end and back-end functionality using Laravel and Vue.js.",
      keywords: ["User Management", "user workflow", "Laravel", "Vue.js"],
    },
    {
      text: "Worked extensively with JavaScript, TypeScript, and Next.js to optimize system performance, achieving a 30% improvement in transaction speed and increasing user engagement. Utilized Vue.js, AWS, and Vercel to enhance deployment efficiency and scalability.",
      keywords: ["JavaScript", "TypeScript", "Next.js", "Vue.js", "AWS", "Vercel", "system performance"],
    },
    {
      text: "Collaborated with developers to provide technical expertise and strategic insights, significantly enhancing the overall system architecture and team efficiency.",
      keywords: ["team collaboration", "technical expertise", "system architecture"],
    },
];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Web Developer <span className="text-AAsecondary">@ Laravel</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Dec 2021 - Sep 2023 </span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://globaliasoft.com/", "_blank")}
          >
            www.globaliasoft.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
