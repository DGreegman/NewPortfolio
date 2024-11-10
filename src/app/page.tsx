import AccordionItem from "@/components/Accordion";
import BorderButton from "@/components/BorderButton";
import ProjectCard from "@/components/ProjectCard";
import { dataitem } from "@/data/project-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-background min-h-[770px]">
        <div className="container mx-auto ">
          <div className="rounded-full ">
            <Image
              src={"/profile.png"}
              alt="profile"
              className="rounded-full mx-auto"
              width={700}
              height={100}
            />
          </div>
          <div className="mx-auto w-full text-center -mt-24">
            <p className="font-semibold text-[32px]">Hello there! 👋</p>
            <h1 className="font-bold text-[40px]">
              I am <span className="text-textSecondary">Gracious Obeagu</span>
            </h1>
            <h3 className="font-bold text-[32px]">
              A <span className="text-textSecondary">FullStack Developer</span>{" "}
              who loves solving complex problems.
            </h3>
            <h3 className="font-semibold text-[24px]">
              When I’m not working, I express my creative talents by{" "}
              <span className="text-textSecondary">Listening to music</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-2">
              <BorderButton text="Linkedln" icon="/linkedin.png" />
              <BorderButton text="GitHub" icon="/github.png" />
              <BorderButton text="Contact Me" icon="/email.png" />
              <BorderButton text="CV" icon="/docs.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white min-h-[750px]">
        <div className="container mx-auto">
          <h1 className="text-black font-bold text-center text-[36px] mt-10">
            My Projects
          </h1>
          <div className="flex flex-col md:flex-row gap-2 w-full max-w-[1240px] h-auto  mx-auto">
            {/* <div className="bg-white w-[400px] h-[531px] rounded-md p-2 m-2">
              <Image src={"/Frame.png"} height={230} width={400} alt="frame" />
              <div>
                <div className="flex">
                  <h3 className="font-semibold text-[24px] text-black p-2">
                    The Stone Project{" "}
                  </h3>
                </div>
                <p className="p-2 text-base text-black text-balance">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content. Lorem ipsum is a placeholder text commonly
                  used to demonstrate the visual form of a document or a
                  typeface without relying on meaningful content.
                </p>
              </div>
              <div className="p-2">
                <Button text="View Project" icon="/external-link.png" />
              </div>
            </div> */}
            <ProjectCard items={dataitem} />
          </div>
        </div>
      </section>

{/* Accordion */}
      <section>
              <AccordionItem title="Languages" content="JavaScript, Python, TypeScript, SQL, Go"/>
              <AccordionItem title="Frameworks" content="React, React-Native, NextJS, Vue, TailwindCss, NodeJS, Express"/>
              <AccordionItem title="Skills" content="MongoDB, MySql, Postgress, Version Control"/>
      </section>

      <footer className="bg-background min-h-[216px]">
        <div className="flex justify-evenly items-center gap-10 pt-20">
              <Link href={'httpshttps://github.com/DGreegman'} className="underline font-bold text-2xl">GitHub</Link>
              <Link href={'https://www.linkedin.com/in/gracious-obeagu-63649b15a/'} className="underline font-bold text-2xl" >Linkedin</Link>
              <Link href={'#'} className="underline font-bold text-2xl">Contact Me</Link>
        </div>
        <div className="pt-4">
           <p className="text-white text-center text-base font-medium"> &copy; 2024. Gracious. All right reserved.</p>
        </div>
        
      </footer>
    </>
  );
}
