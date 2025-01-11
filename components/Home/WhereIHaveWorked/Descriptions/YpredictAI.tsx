import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function YpredictAI() {
  const tasks = [
    {
      text: "Worked on Diffrent types functionality as per project and client requiremnt with servers.",
      keywords: ["servers","client"],
    },
    {
      text: "Enhanced server integration to support new features.",
      keywords: ["server integration"],
    },
    // {
    //   text: "Integrated Solidity-based smart contracts and MongoDB for effective data management, ensuring seamless interaction with blockchain protocols.",
    //   keywords: ["Solidity", "smart contracts", "MongoDB", "blockchain protocols", "data management"],
    // },
    {
      text: "Fixed minor issues with server-side logic.",
      keywords: ["server-side"],
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
          <span className="font-mono text-xs text-gray-500">Oct - Nov 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://logixbuilt.com/", "_blank")}
          >
            www.logixbuilt.com
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
