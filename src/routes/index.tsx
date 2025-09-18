import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QTextType } from "~/components/react/text-type";
import { QBlurText } from "~/components/react/text-blur";
import { QFaGithub } from "~/components/icons";

import Image from "~/assets/nishimiya.jpeg?jsx";
import { QCircularText } from "~/components/react/circular-text";
import { QLightRays } from "~/components/react/light-ray";

export default component$(() => {
  return (
    <main class="w-full min-h-screen">
      <section class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_center,_#1a1a1a,_#0c0c0c)] overflow-hidden">

        {/* Background Rays */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: 1 }}>

          <QLightRays
            raysOrigin="top-center"
            raysColor="#ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays pointer-events-none"
          />
        </div>


        {/* Profile Image with Circular Text */}
        <div class="relative flex items-center justify-center">
          <QCircularText
            text="*ikhwan*satrio*"
            spinDuration={20}
            className="custom-class"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <Image
              class="h-[130px] w-[130px] rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Text Block */}
        <div class="flex flex-col items-center gap-4 p-3">
          {/* Heading */}
          <QBlurText
            text="hello, i'm Ikhwan satrio"
            delay={150}
            animateBy="words"
            direction="top"
            className="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 bg-clip-text text-transparent"
          />

          {/* Typing Text */}
          <QTextType
            className="font-inter text-lg sm:text-xl md:text-2xl text-gray-400"
            text={[
              "Young Programmer",
              "Frontend Developer",
              "Loves Qwik & Svelte",
              "Happy coding!",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
          />
        </div>

        {/* Call to Action */}
        <div class="mt-8 flex flex-wrap gap-4 justify-center z-2">
          <a
            href="#projects"
            class="min-w-[150px] text-center px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="https://github.com/wanto-production"
            target="_blank"
            class="min-w-[150px] text-center px-6 py-2 rounded-xl border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 hover:text-white flex items-center justify-center gap-2 transition-all duration-300"
          >
            <QFaGithub className="w-5 h-5" /> Github
          </a>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "home",
  meta: [
    {
      name: "description",
      content: "Personal portfolio of Ikhwan Satrio - Frontend Developer",
    },
  ],
};
