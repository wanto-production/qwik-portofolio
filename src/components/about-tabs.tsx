import { component$ } from "@builder.io/qwik";

export const StoryTab = component$(() => {
  return (
    <div class="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div class="text-center">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
          My Story
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              Hello! I'm Ikhwan Satrio, a passionate young programmer who fell in love with
              web development. My journey started with curiosity and has grown into a deep
              passion for creating beautiful, performant web experiences.
            </p>
            <p>
              I specialize in modern frontend frameworks, especially Qwik,Astro and Svelte, because
              I believe in building fast, efficient applications that users love. Performance
              isn't just a feature—it's a fundamental requirement.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, playing games,
              or contributing to open-source projects. I'm always eager to learn and share
              knowledge with the developer community.
            </p>
          </div>

          <div class="flex flex-wrap gap-3 mt-8">
            <span class="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30">
              Creative Thinker
            </span>
            <span class="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-600/30">
              Problem Solver
            </span>
            <span class="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-full text-sm border border-cyan-600/30">
              Team Player
            </span>
          </div>
        </div>

        <div class="relative">
          <div class="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div class="text-center space-y-6">
              <div class="text-6xl">💭</div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                My Philosophy
              </h3>
              <blockquote class="text-gray-300 text-lg italic leading-relaxed">
                "Code is my canvas, and ambition is my fuel."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export const SkillsTab = component$(() => {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-indigo-500' },
    { name: 'React', level: 75, color: 'from-cyan-500 to-blue-500' },
    { name: 'Qwik', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'Svelte', level: 80, color: 'from-orange-500 to-red-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX Design', level: 70, color: 'from-pink-500 to-purple-500' },
    { name: 'Database', level: 70, color: 'from-indigo-500 to-purple-500' }
  ];

  return (
    <div class="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div class="text-center">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
          Skills & Technologies
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Here are the technologies I love working with and my proficiency levels
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={skill.name} class="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold text-white text-lg">{skill.name}</h3>
              <span class="text-gray-400 font-medium">{skill.level}%</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <div
                class={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: `${skill.level}%`,
                  animationDelay: `${index * 100}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div class="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-gray-700/50">
        <p class="text-gray-300 text-lg">
          🚀 Always learning new technologies and staying up-to-date with the latest trends in web development
        </p>
      </div>
    </div>
  );
})

export const JourneyTab = component$(() => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovation Co.',
      description: 'Building modern web apps with Qwik and Svelte, focusing on performance optimization'
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developing scalable applications with React, Node.js and TypeScript'
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Creative Studio',
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      year: '2021',
      title: 'Started Programming Journey',
      company: 'Self-taught Explorer',
      description: 'Fell in love with web development and modern JavaScript frameworks'
    }
  ];

  return (
    <div class="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div class="text-center">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
          My Journey
        </h2>
        <p class="text-gray-400 text-lg">The path that led me to where I am today</p>
      </div>

      <div class="space-y-8 max-w-4xl mx-auto">
        {timeline.map((item, index) => (
          <div key={index} class="flex gap-8 group">
            <div class="flex flex-col items-center flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                {item.year}
              </div>
              {index < timeline.length - 1 && (
                <div class="w-px h-20 bg-gradient-to-b from-gray-600 to-transparent mt-4"></div>
              )}
            </div>
            <div class="flex-1 pb-12">
              <div class="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm group-hover:border-gray-600/50 transition-all duration-300">
                <h3 class="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p class="text-blue-400 font-semibold mb-3">{item.company}</p>
                <p class="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
})

export const InterestTab = component$(() => {
  const interests = [
    { emoji: '🎮', title: 'Gaming', desc: 'Strategy games and indie titles' },
    { emoji: '📚', title: 'Learning', desc: 'Always exploring new tech' },
    { emoji: '☕', title: 'Coffee', desc: 'Fuel for late-night coding' },
    { emoji: '🎵', title: 'Music', desc: 'Lo-fi beats while coding' },
    { emoji: '🌟', title: 'Open Source', desc: 'Contributing to community' },
    { emoji: '🚀', title: 'Innovation', desc: 'Building the future' }
  ];

  return (
    <div class="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div class="text-center">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 p-2">
          Beyond Code
        </h2>
        <p class="text-gray-400 text-lg">What inspires and motivates me outside of programming</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest) => (
          <div
            key={interest.title}
            class="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 group"
          >
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {interest.emoji}
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{interest.title}</h3>
            <p class="text-gray-400">{interest.desc}</p>
          </div>
        ))}
      </div>

      <div class="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-8 text-center border border-gray-700/50 backdrop-blur-sm">
        <div class="text-4xl mb-4">🎯</div>
        <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Current Focus
        </h3>
        <p class="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          I'm currently diving deep into performance optimization with Qwik and exploring
          the intersection of AI and web development. Always excited about pushing the
          boundaries of what's possible on the web! 🚀
        </p>
      </div>
    </div>
  );
})
