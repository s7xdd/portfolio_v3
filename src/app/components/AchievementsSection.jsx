"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="socials flex flex-col ">
              <ul className="flex gap-10 justify-center mt-16 md:mt-10 lg:mt-10 transition-all ease-in-out">
                <a href="https://www.linkedin.com/in/kmshamil">
                <li> <Image src='/github.svg' alt="LinkedIn" width={70} height={20} className="" /></li>
                </a>
                <a href="https://www.github.com/s7xdd">
                <li> <Image src='/linkedin.svg' alt="LinkedIn" width={70} height={20} className="" /></li>
                </a>
              </ul>
            </div>
  );
};

export default AchievementsSection;
