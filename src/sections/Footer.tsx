import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
const footerLinks = [
  {
    title: "YouTube",
    href: "https://www.youtube.com/@monstajoedev",
  },
  {
    title: "Twitter",
    href: "https://x.com/monstajoedev",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/youssef-el-shehaby-2ba3a1245/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-sky-300/30 [mask-image:radial-gradient(50%_50%_at_bottom,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                target="_blank"
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
