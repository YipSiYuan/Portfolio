import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"


const HeroText = () => 
{
    const words =["GameDev", "Programming","Game Design","Problem Solving", "Innovation", "Team Player"]
    const variants = 
    {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0},
    }
  return (
    <div className="z-10 mt-20 text-center rounded-3xl bg-clip-text justify-center items-center">
        {/*Desktop View */}
        <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-8xl font-bold drop-shadow-amber-950" style={{fontFamily: 'jaro'}}
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition = {{delay: 1}}>Welcome to my portfolio
                </motion.h1>
            
            <div className="flex flex-col items-cente pt-10">
                 {/* <div>get flip word from aceternity</div>*/}
                    <motion.p className="text-5xl font-medium text-neutral-300" style={{fontFamily: 'Jaro'}}
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition = {{delay: 1.2}}>A Developer Dedicated to 
                </motion.p>

                <motion.div
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition = {{delay: 1.5}}>
                <FlipWords words={words} className="font-black text-neutral-200 text-7xl" style={{fontFamily: 'Jaro'}} />
                </motion.div>

             
               
            </div>
        </div>

        {/*Mobile View */}
        <div className="flex- flex-col space-y-6 md:hidden">
            <motion.p className="font-medium text-4xl"
            variants={variants}
            initial = "hidden"
            animate = "visible"
            transition = {{delay: 1}}>Hi I'm SiYuan</motion.p>
            <div>
                <motion.p className="f text-neutral-300 text-5xl font-black"
                variants={variants}
                initial = "hidden"
                animate = "visible"
                transition = {{delay: 1.2}}>Building</motion.p>
                <motion.div
                variants={variants}
                initial = "hidden"
                animate = "visible"
                transition = {{delay: 1.5}}><FlipWords words={words} className="font-black text-white text-7xl"/></motion.div>
                <motion.p className="text-4xl font-black text-neutral-300" 
                variants={variants}
                initial = "hidden"
                animate = "visible"
                transition = {{delay: 1.8}}>Web Applications</motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText