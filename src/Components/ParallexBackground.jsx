import React from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, {damping: 50})
    const mountain3Y = useTransform(x, [0,0.5], ["0%", "80%"]);
    const planetsX = useTransform(x, [0,0.5], ["0%", "40%"]);
    const mountain2Y = useTransform(x, [0,0.5], ["0%", "10%"]);
    const mountain1Y = useTransform(x, [0,0.5], ["0%", "0%"]);

  return (
   <section className="absolute inset-0 bg-black/40">
    <div className="relative h-screen overflow-y-hidden">
        <div className="absolute inset-0 w-full h-screen -z-50" 
        style={{
            backgroundImage: "url(/assets/ParallexBG/bg_2_0004_Layer-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            }}/>
        
        <motion.div className="absolute inset-0 -z-40"
        style={{
            backgroundImage: "url(/assets/ParallexBG/bg_2_0003_Layer--2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
            }}/>
        <motion.div className="absolute inset-0 -z-30"
        style={{
            backgroundImage: "url(/assets/ParallexBG/bg_2_0002_Layer-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:planetsX,
            }}/>
        <motion.div className="absolute inset-0 -z-20"
        style={{
            backgroundImage: "url(/assets/ParallexBG/bg_2_0001_Layer-0.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
            }} />
    </div>
    </section>
  );
};

export default ParallaxBackground;
