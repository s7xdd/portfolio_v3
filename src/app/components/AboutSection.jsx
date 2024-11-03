"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Cover } from "./ui/Text-Cover";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-4 md:grid-cols-5 gap-6 md:gap-x-10">
        <li>React</li>
        <li>Nextjs</li>
        <li>Vitejs</li>
        <li>Nodejs</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>Typescript</li>
        <li>Mongodb</li>
        <li>MySQL</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>ChakraUI</li>
        <li>C</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="">
        <li>
          <div>
            <p> BTech in Computer science and engineering</p>
          </div>
        </li>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white  pb-16  " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/about-me.jpg" width={700} height={500} alt="About Image" className="rounded-md" /> */}
        <h2 className="text-7xl md:text-7xl lg:text-9xl text-center font-bold mb-4 p-0 md:p-12 "><Cover>ABOUT <br/> ME</Cover></h2>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          
          <p className="text-base lg:text-lg text-center md:text-left">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. Having a solid foundation
          in web development technologies, particularly React, Node.js, and
          MongoDB, I am eager to bring my skills into real world organisations so as
          to help develop and improve existing systems. 
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            <div className=" gap-4 md:gap-x-50">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
