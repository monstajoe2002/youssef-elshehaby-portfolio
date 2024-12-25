import { Card } from "@/components/card";
import { SectionHeader } from "@/components/section-header";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import ArcIcon from "@/assets/icons/arc-browser.svg";
import GithubIcon from "@/assets/icons/github.svg";
const toolboxItems = [
  {
    title: "JavaScript",
    icon: <JavascriptIcon />,
  },
  {
    title: "HTML5",
    icon: <HtmlIcon />,
  },
  {
    title: "CSS3",
    icon: <CssIcon />,
  },
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    title: "Arc",
    icon: <ArcIcon />,
  },
  {
    title: "GitHub",
    icon: <GithubIcon />,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experiences.
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
