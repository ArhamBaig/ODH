"use client";
import Image from "next/image";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const Writers = () => {
  const people = [
    {
      id: 1,
      name: "Calliope Hawthorne",
      designation: "PhD in Biochemistry",
      image: "/assets/writer_1.png",
      desc: (
        <>
          Dr. Hawthorne earned her PhD in Biochemistry from Stanford University,
          specializing in molecular biology and genetics. With over ten years of
          experience in scientific research and academic writing, she has
          published numerous articles in peer-reviewed journals. Dr.
          Hawthorne&#39;s expertise in biochemistry and her commitment to
          excellence make her a sought-after resource for students in need of
          assistance with complex scientific dissertation topics or assignments.
        </>
      ),
    },
    {
      id: 2,
      name: "Daxton Finch",
      designation: "PhD in Economics",
      image: "/assets/writer_2.png",
      desc: (
        <>
          Dr. Finch received his PhD in Economics from Harvard University,
          focusing on macroeconomic theory and policy analysis. With over
          fifteen years of experience in academia and consulting, he has worked
          on research projects for government agencies and international
          organizations. Dr. Finch&#39; proficiency in economic modelling and
          data analysis enables him to provide students with comprehensive
          support for their economics dissertations or other academic tasks.
        </>
      ),
    },
    {
      id: 3,
      name: "Lyra Rivers",
      designation: "PhD in Psychology",
      image: "/assets/writer_3.png",
      desc: (
        <>
          Dr. Rivers obtained her PhD in Psychology from the University of
          California, Berkeley, with a specialization in cognitive neuroscience.
          Her research focuses on understanding the neural mechanisms underlying
          human cognition and behaviour. With over a decade of experience in
          academic research and teaching, Dr Rivers is well-equipped to assist
          students with their psychology dissertations and academic papers,
          offering insights grounded in empirical evidence and scientific
          rigour.
        </>
      ),
    },
    {
      id: 4,
      name: "Ronan Wilson",
      designation: "PhD in Computer Science",
      image: "/assets/writer_4.png",
      desc: (
        <>
          Dr. Wilson completed his PhD in Computer Science from Massachusetts
          Institute of Technology (MIT), specializing in artificial intelligence
          and machine learning. With over ten years of experience in both
          academia and industry, he has developed cutting-edge algorithms and
          software solutions for various applications. Dr. Wilson&#39;s
          expertise in computer science and his passion for innovation make him
          an invaluable resource for students seeking help with their
          programming and AI-related academic tasks.
        </>
      ),
    },
    {
      id: 5,
      name: "Thalia Moon",
      designation: "PhD in Sociology",
      image: "/assets/writer_5.png",
      desc: (
        <>
          Dr. Moon earned her PhD in Sociology from Columbia University, with a
          focus on social inequality and stratification. Her research examines
          the intersections of race, class, and gender in shaping
          individuals&#39; life chances and opportunities. With extensive
          experience in qualitative research methods and sociological theory,
          Dr. Moon offers students valuable insights into complex social issues
          and phenomena, guiding them through their sociology dissertations and
          assignments with depth and clarity.
        </>
      ),
    },
    {
      id: 6,
      name: "Kieran Wycliffe",
      designation: "PhD in Physics",
      image: "/assets/writer_5.png",
      desc: (
        <>
          Dr. Wycliffe received his PhD in Physics from Princeton University,
          specializing in theoretical particle physics. His research focuses on
          elucidating the fundamental forces and particles that govern the
          universe. With a strong background in mathematical modeling and
          computational physics, Dr. Wycliffe is well-positioned to assist
          students with their physics papers, providing them with rigorous and
          insightful analyses grounded in the principles of modern physics.
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-5xl text-center heading">
        Who&#39;s On Board of Online Dissertation Help? Get to Know Our
        Professionals!
      </h2>
      <div className=" flex">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
};

export default Writers;
