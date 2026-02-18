import { ThreeDCardDemo } from "../Components/UICards/ThreeDCardDemo"

const Introduction = () => {
  return (
    <div className="relative flex flex-col items-start justify-center overflow-hidden gap-20 pt-50 container mx-auto max-w-8xl">
      <div className="font-bold text-6xl items-start pl-20"  style = {{fontFamily: 'Jaro'}}>About me</div>
      <section className="flex flex-row items-center gap-10 c-space w-full">
        <img src="/assets/picture-of-me.png" className="w-auto h-auto" />
        <div className="flex-1 text-neutral-300 font-medium text-xl" style={{ fontFamily: 'Jaro' }}>
          I completed my Media Arts & Design Diploma and was later scouted for an internship at Terresquall. Throughout my time there, I consistently delivered high-quality work on schedule and gained valuable hands-on experience in programming and web development.
          <br /><br />
          I am proficient in Unity game development and comfortable coding in Java, CSS, HTML, Python, and C#. I'm always eager to learn and adapt to new programming languages and technologies.
          <br /><br />
          I'm now ready to take the next step in my career as a programmer, continuing to refine my skills and contribute to impactful projects.
        </div>
      </section>
    </div>
  )
}

export default Introduction