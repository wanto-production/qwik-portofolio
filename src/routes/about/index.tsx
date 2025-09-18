import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import { QTextType } from "~/components/react/text-type";
import { QBlurText } from "~/components/react/text-blur";
import Image from "~/assets/nishimiya.jpeg?jsx";
import { StoryTab, InterestTab, JourneyTab, SkillsTab } from '~/components/about-tabs';

export default component$(() => {
  const activeTab = useSignal('story');

  const switchTab = $((tab: string) => {
    activeTab.value = tab;
  });

  return (
    <main class="w-full min-h-screen">
      {/* Hero Section */}
      <section class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_center,_#1a1a1a,_#0c0c0c)] overflow-hidden">

        {/* Profile Image */}
        <div class="relative ">
          <div class="relative">
            <Image
              class="h-[150px] w-[150px] rounded-full object-cover shadow-2xl border-4 border-gray-700/50"
            />
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div class="flex flex-col items-center gap-6 p-3 z-10">
          <QBlurText
            text="About Ikhwan Satrio"
            delay={150}
            animateBy="words"
            direction="top"
            className="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 bg-clip-text text-transparent"
          />

          <QTextType
            className="font-inter text-lg sm:text-xl md:text-2xl text-gray-400"
            text={[
              "Passionate Developer",
              "Problem Solver",
              "Tech Enthusiast",
              "Linux Enthusiast",
            ]}
            typingSpeed={80}
            pauseDuration={1800}
            showCursor
            cursorCharacter="|"
          />
        </div>

        {/* Navigation Tabs */}
        <div class="flex flex-wrap justify-center gap-3 z-10 mt-4">
          {['story', 'skills', 'journey', 'interests'].map((tab) => (
            <button
              key={tab}
              onClick$={() => switchTab(tab)}
              class={`px-6 py-2 rounded-xl font-medium transition-all duration-300 capitalize ${activeTab.value === tab
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section class="w-full min-h-screen bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a] pointer-events-none">
        <div class="max-w-6xl mx-auto px-6">
          {/* Story Tab */}
          {activeTab.value === 'story' && (<StoryTab />)}

          {/* Skills Tab */}
          {activeTab.value === 'skills' && (<SkillsTab />)}

          {/* Journey Tab */}
          {activeTab.value === 'journey' && (<JourneyTab />)}

          {/* Interests Tab */}
          {activeTab.value === 'interests' && (<InterestTab />)}
        </div>
      </section>

      {/* CTA Section */}
      <section class="w-full bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c] py-20">
        <div class="max-w-4xl mx-auto text-center px-6">
          <div class="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
              Let's Build Something Amazing
            </h2>
            <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on interesting projects and collaborate with passionate people.
              Whether it's a challenging technical problem or an innovative idea, let's make it happen!
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                class="min-w-[150px] text-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="/contact"
                class="min-w-[150px] text-center px-8 py-3 rounded-xl border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});


export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "Learn more about Ikhwan Satrio - Young passionate programmer specializing in modern web development with Qwik, Svelte, and React",
    },
  ],
};
