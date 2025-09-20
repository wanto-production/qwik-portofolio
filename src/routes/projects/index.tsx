import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import { QBlurText } from "~/components/react/text-blur";
import { QLightRays } from "~/components/react/light-ray";

export default component$(() => {
  const selectedCategory = useSignal('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 3 },
    { id: 'web', name: 'Web Apps', count: 1 },
    { id: 'mobile', name: 'Mobile', count: 0 },
    { id: 'ui', name: 'UI/UX', count: 0 },
    { id: 'opensource', name: 'Open Source', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Portofolio and personal blog',
      description: 'my other portofolio with personal blog features',
      category: 'web',
      technologies: ['AstroJs', 'TypeScript', 'Tailwind CSS', 'SolidJs'],
      demoUrl: 'https://portofolio-ikhwan.vercel.app',
      githubUrl: 'https://github.com/wanto-production/astro-portofolio',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Lenovo vantage for linux',
      description: 'Lenovo vantage for linux, build with tauri and svelte',
      category: 'opensource',
      technologies: ['Svelte', 'Tauri', 'Rust', 'Tailwind Css'],
      githubUrl: 'https://github.com/wanto-production/linux_vantage',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Telegram tiktok bot',
      description: 'Telegram bot who can install tiktok video without watermark',
      category: 'opensource',
      technologies: ['TypeScript', 'Bun', 'WebHook'],
      githubUrl: 'https://github.com/wanto-production/next_webhook',
      status: 'completed',
    },
  ];

  const filteredProjects = selectedCategory.value === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory.value);

  const switchCategory = $((category: string) => {
    selectedCategory.value = category;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <main class="w-full min-h-screen">
      {/* Hero Section */}
      <section class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_center,_#1a1a1a,_#0c0c0c)] overflow-hidden">
        {/* Background Rays */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: 1 }}>
          <QLightRays
            raysOrigin="top-center"
            raysColor="#ffff"
            raysSpeed={1.0}
            lightSpread={0.5}
            rayLength={0.8}
            followMouse
            mouseInfluence={0.06}
            noiseAmount={0.15}
            distortion={0.02}
            className="custom-rays pointer-events-none"
          />
        </div>

        {/* Content */}
        <div class="relative z-10 space-y-8">
          <div class="flex flex-col items-center justify-center text-center space-y-6">
            <QBlurText
              text="My Projects"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 bg-clip-text text-transparent p-3"
            />

            <p class="font-inter text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of projects I've worked on, from web applications to mobile apps and everything in between
            </p>
          </div>

          {/* Stats */}
          <div class="flex flex-wrap justify-center gap-8 mt-12">
            <div class="text-center">
              <div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                3+
              </div>
              <div class="text-gray-400 text-sm uppercase tracking-wide">
                Projects
              </div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                6+
              </div>
              <div class="text-gray-400 text-sm uppercase tracking-wide">
                Technologies
              </div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                2+
              </div>
              <div class="text-gray-400 text-sm uppercase tracking-wide">
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div class="flex flex-col items-center animate-bounce">
            <span class="text-gray-400 text-sm mb-2">Explore Projects</span>
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section class="w-full bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c] py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              All Projects
            </h2>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">
              Browse through all my projects by category
            </p>
          </div>

          {/* Category Filter */}
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick$={() => switchCategory(category.id)}
                class={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory.value === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                {category.name}
                <span class="ml-2 px-2 py-0.5 bg-black/20 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                class="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-500 hover:transform hover:-translate-y-2 flex flex-col"
              >
                {/* Project Image */}
                <div class="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-4xl opacity-30">
                      {project.category === 'web' ? '🌐' :
                        project.category === 'mobile' ? '📱' :
                          project.category === 'ui' ? '🎨' : '🔧'}
                    </div>
                  </div>

                  {/* Status */}
                  <div class="absolute top-3 left-3">
                    <div class={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></div>
                  </div>
                </div>

                {/* Content */}
                <div class="p-6 flex flex-col h-full">
                  <div class="flex-1 space-y-4">
                    <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p class="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div class="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          class="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span class="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links - Always at bottom */}
                  <div class="flex gap-2 mt-6">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
                      >
                        Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class={`px-3 py-2 border border-gray-600 text-gray-300 hover:bg-gray-800 text-sm rounded-lg transition-all duration-200 ${project.demoUrl ? '' : 'flex-1 text-center'
                        }`}
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="w-full bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a] py-20">
        <div class="max-w-4xl mx-auto text-center px-6">
          <div class="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Have a Project in Mind?
            </h2>
            <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on interesting projects and collaborate with passionate people.
              Let's bring your ideas to life!
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start a Project
              </a>
              <a
                href="/about"
                class="px-8 py-3 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Projects",
  meta: [
    {
      name: "description",
      content: "Explore the portfolio of Ikhwan Satrio - Frontend Developer. Showcasing web applications, mobile apps, and open-source projects built with modern technologies like Qwik, React, and TypeScript.",
    },
  ],
};
