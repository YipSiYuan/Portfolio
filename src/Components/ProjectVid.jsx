const ProjectVid = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        src="/assets/mp4/beta_Gameplay.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

       {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-neutral-100">
          <h1 className="text-6xl font-bold" style={{fontFamily: "jaro"}}>All my projects</h1>
          <p className="mt-4 text-xl opacity-80 text-neutral-300">
            This are all the projects that I have worked on, from game development to web development, and more. Feel free to explore and check out my work!
          </p>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#030412]" />
    </div>
  );
};

export default ProjectVid;
