"use client";


import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import { BackgroundGradient } from "../background-gradient";

export function MindWarriorCard() {
  return (
    <CardContainer className="inter-var">
      <BackgroundGradient className="rounded-[22px] max-w-md  bg-white dark:bg-zinc-100">
      <CardBody
        className="bg-gray-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/20 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-[22px] p-6 border  ">
        <CardItem
          translateZ="70"
          className="text-2xl font-bold text-neutral-300 dark:text-white">
          Mind Warrior: Resilience Rising
        </CardItem>
        <CardItem
          as="p"
          translateZ="90"
          className="text-neutral-400 text-md max-w-sm mt-2 dark:text-neutral-300">
          teamup with friends and fight against thinking traps and learn how to overcome them.
        </CardItem>
        <CardItem className="w-full mt-4" translateZ={120}>
          <img
            src ="/assets/Projectimage/Artbook_cover_resize.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
      
      </CardBody>
      </BackgroundGradient>
    </CardContainer>
  );
}
