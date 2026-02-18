const Skills = () => {
  const skills = [
    {
      id: "unity",
      img: "/assets/unity-icon.png",
      desc:
        "I have been using Unity for over 2 years, creating various projects ranging from 2D platformers to 3D games. I am proficient in C# and have experience with Unity's built-in tools and features, such as the Animator, Particle System, and UI system. I have also worked with third-party plugins like Cinemachine and ProBuilder to enhance my projects.",
    },
    {
      id: "csharp",
      img: "/assets/c.png",
      desc:
        "My main programming language is C# due to my extensive experience with Unity. I have used C# for scripting game mechanics, creating custom editor tools, and implementing gameplay features. I am comfortable with object-oriented programming principles and have a strong understanding of C# syntax and best practices.",
    },
    {
      id: "premiere",
      img: "/assets/Premiere.png",
      desc:
        "Premiere Pro is my go-to software for video editing, and I have been using it for over 3 years. I am proficient in various editing techniques, including color grading, transitions, and audio editing. I have created multiple trailers and promotional videos for my projects using Premiere Pro.",
    },
    {
      id: "html",
      img: "/assets/HTML5_logo_and_wordmark.svg.png",
      desc:
        "I have a solid understanding of HTML and have used it for creating websites and web applications. I am familiar with semantic HTML, responsive design principles, and accessibility best practices. I have also worked with CSS and JavaScript to enhance the functionality and appearance of my web projects.",
    },
  ];

  const scrollWords = ["Leadership", "Teamwork", "fast-Learner", "initative", "Time managment", "Problem solving", "Discipline", "Communication", "Adaptability", "Critical thinking", "Collaboration", "Work Ethic", "Resilience"];

  return (
    <div className="container mx-auto max-w-8xl py-20">
      <h1 className="text-6xl font-bold text-center" style={{ fontFamily: "Jaro" }}>
        Software Proficiency
      </h1>
      
      {/* Scrolling Words Section */}
      <div className="overflow-hidden py-4 my-10 text-neutral-300" style={{ fontFamily: "Jaro" }}>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 2)); }
          }
          .scroll-container {
            animation: scroll 20s linear infinite;
            display: flex;
            gap: 2rem;
            width: fit-content;
          }
          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="scroll-container">
          {scrollWords.map((word, i) => (
            <span key={i} className="text-2xl font-bold whitespace-nowrap">
              {word}
            </span>
          ))}
          {scrollWords.map((word, i) => (
            <span key={`duplicate-${i}`} className="text-2xl font-bold whitespace-nowrap">
              {word}
            </span>
          ))}
          {scrollWords.map((word, i) => (
            <span key={`duplicate-2-${i}`} className="text-2xl font-bold whitespace-nowrap">
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-10 py-10 px-32" style={{ fontFamily: "Jaro" }}>
        {skills.map((s) => (
          <div
            key={s.id}
            className="flex flex-row items-start gap-4 p-10 border rounded-lg w-full"
          >
            <img src={s.img} alt="" className="w-24 h-auto" />
            <p className="text-lg">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;