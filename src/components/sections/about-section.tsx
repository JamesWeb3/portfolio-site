import { Marquee } from "../ui/marquee";
import {
  OpenaiIcon,
  AnthropicIcon,
  GithubIcon,
  TypescriptIcon,
  JavascriptIcon,
  SupabaseIcon,
  FigmaIcon,
  CursorIcon,
} from "../ui/icons";

const icons = [
  <OpenaiIcon key="openai" />,
  <AnthropicIcon key="anthropic" />,
  <GithubIcon key="github" />,
  <TypescriptIcon key="typescript" />,
  <JavascriptIcon key="javascript" />,
  <SupabaseIcon key="supabase" />,
  <FigmaIcon key="figma" />,
  <CursorIcon key="cursor" />,
];

const firstRow = icons.slice(0, icons.length);

export const AboutSection = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-w-[650px] py-10 md:px-40">
      <Marquee pauseOnHover className="[--duration:10s]">
        <div className="flex gap-12 items-center">
          {firstRow.map((icon) => (
            <div
              key={icon.key}
              className="flex items-center justify-center"
            >
              {icon}
            </div>
          ))}
        </div>
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
};
