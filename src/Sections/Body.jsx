import Introduction from "../Sections/Introduction";
import ProjectHighlights from "../Sections/ProjectHighlights";
import Skills from "../Sections/Skills";
import { DotBackgroundGrid } from "../Components/DotBackgroundGrid";

const Body = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <DotBackgroundGrid />
    <div
        className="absolute top-0 left-0 w-full h-30 md:h-30 lg:h-80 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(3,4,18,0.65), rgba(3,4,18,0))",
        }}
      />

      <div className="container mx-auto c-space relative z-10">
        <Introduction />
        <ProjectHighlights />
        <Skills />
      </div>
    </div>
  );
};

export default Body;
