import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Developed front-end components in the web3 domain using Vue.js, Bootsrap, Tailwind CSS, and Nuxt.js,implementing API routes for backend tasks in Laravel.",
      keywords: ["Vue.js","Bootsrap","Tailwind CSS", "Nuxt.js", "API routes", "Laravel"],
    },
    {
      text: "Conducted extensive testing to ensure website functionality and maintain quality, managing a large user base effectively.",
      keywords: ["quality assurance", "testing", "user base management"],
    },
    {
      text: "Acquired proficiency in working with Shopify RESTful APIs, incorporating third-party integrations, theme customisation, custom plugin development, utilizing NPM packages",
      keywords: ["Shopify RESTful APIs"],
    },
    {
      text: "Collaborated closely with the team in regular meetings, interacted with smart contracts, and gained expertise in Developing.",
      keywords: ["smart contracts", "ENS", "team collaboration"],
    },
];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          FullStack Developer <span className="text-AAsecondary">@ web3</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Nov 2023 - Nov 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://addigitech.com/", "_blank")}
          >
            www.addigitech.com
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
