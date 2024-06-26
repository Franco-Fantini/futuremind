import { socials } from "../constants";
import Section from "./Section";

export const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-0">
      <div
        className="container  p-10 flex sm:justify-between justify-center items-center
        gap-10 max-sm:flex-col "
      >
        <p className="caption text-n-4 lg:block">
          {new Date().getFullYear()} All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              href={item.url}
              key={item.id}
              target="_blank"
            >
              <img
                src={item.iconUrl}
                width={item.title == "LinkedIn" ? 48 : 32}
                height={32}
                alt={item.title}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};
export default Footer;
