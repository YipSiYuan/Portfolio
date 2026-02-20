const ProjectVid = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        src="/assets/mp4/beta_Gameplay.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CENTER TEXT (optional) */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-6xl text-white font-bold ">All my Projects</h1>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-200 bg-gradient-to-b from-transparent to-[#030412]" />
    </section>
  );
};

export default ProjectVid;
