import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/wanto-production',
      icon: (
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/ikhwan-satrio',
      icon: (
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065a2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/ikhwansatrio',
      icon: (
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775a4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827a4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/wantoobrrrrrr/',
      icon: (
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 6.756.072C5.526.13 4.718.33 4.015.63a5.98 5.98 0 00-2.157 1.405A5.98 5.98 0 00.453 4.192c-.3.703-.5 1.511-.558 2.741C-.072 8.166-.059 8.573-.059 12.017c0 3.444-.013 3.851.045 5.084c.058 1.23.258 2.038.558 2.741a5.98 5.98 0 001.405 2.157a5.98 5.98 0 002.157 1.405c.703.3 1.511.5 2.741.558c1.233.058 1.64.045 5.084.045c3.444 0 3.851.013 5.084-.045c1.23-.058 2.038-.258 2.741-.558a5.98 5.98 0 002.157-1.405a5.98 5.98 0 001.405-2.157c.3-.703.5-1.511.558-2.741c.058-1.233.045-1.64.045-5.084c0-3.444.013-3.851-.045-5.084c-.058-1.23-.258-2.038-.558-2.741a5.98 5.98 0 00-1.405-2.157A5.98 5.98 0 0019.832.63c-.703-.3-1.511-.5-2.741-.558C15.851.013 15.444 0 12.017 0zm0 2.158c3.387 0 3.787.013 5.12.072c1.235.058 1.906.264 2.353.438a3.94 3.94 0 011.462.95a3.94 3.94 0 01.95 1.462c.174.447.38 1.118.438 2.353c.059 1.333.072 1.733.072 5.12s-.013 3.787-.072 5.12c-.058 1.235-.264 1.906-.438 2.353a3.94 3.94 0 01-.95 1.462a3.94 3.94 0 01-1.462.95c-.447.174-1.118.38-2.353.438c-1.333.059-1.733.072-5.12.072s-3.787-.013-5.12-.072c-1.235-.058-1.906-.264-2.353-.438a3.94 3.94 0 01-1.462-.95a3.94 3.94 0 01-.95-1.462c-.174-.447-.38-1.118-.438-2.353c-.059-1.333-.072-1.733-.072-5.12s.013-3.787.072-5.12c.058-1.235.264-1.906.438-2.353a3.94 3.94 0 01.95-1.462a3.94 3.94 0 011.462-.95c.447-.174 1.118-.38 2.353-.438c1.333-.059 1.733-.072 5.12-.072zM12.017 5.838a6.179 6.179 0 100 12.358a6.179 6.179 0 000-12.358zm0 10.188a4.009 4.009 0 110-8.018a4.009 4.009 0 010 8.018zm7.846-10.405a1.441 1.441 0 11-2.883 0a1.441 1.441 0 012.883 0z" />
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'Qwik', 'Bun'
  ];

  return (
    <footer class="bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c] border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div class="lg:col-span-2 space-y-6">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-lg">IS</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Ikhwan Satrio</h3>
                <p class="text-gray-400 text-sm">Young Programmer</p>
              </div>
            </div>

            <p class="text-gray-300 leading-relaxed max-w-md">
              Passionate frontend developer crafting beautiful and performant web experiences
              with modern technologies. Always learning, always building.
            </p>

            {/* Social Links */}
            <div class="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span class="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div class="space-y-6">
            <h4 class="text-lg font-semibold text-white">Quick Links</h4>
            <ul class="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    class="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span class="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div class="space-y-6">
            <h4 class="text-lg font-semibold text-white">Tech Stack</h4>
            <div class="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  class="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-white transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Status */}
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span class="text-sm text-gray-400">Available for projects</span>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div class="py-8 border-t border-gray-800"> */}
        {/*   <div class="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"> */}
        {/*     <div class="text-center space-y-4"> */}
        {/*       <h4 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> */}
        {/*         Stay Updated */}
        {/*       </h4> */}
        {/*       <p class="text-gray-400 max-w-md mx-auto"> */}
        {/*         Get notified about new projects, blog posts, and tech insights */}
        {/*       </p> */}
        {/*       <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"> */}
        {/*         <input */}
        {/*           type="email" */}
        {/*           placeholder="Enter your email" */}
        {/*           class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" */}
        {/*         /> */}
        {/*         <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"> */}
        {/*           Subscribe */}
        {/*         </button> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}

        {/* Bottom Section */}
        <div class="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center space-x-2 text-gray-400 text-sm">
            <span>&copy; {currentYear} Ikhwan Satrio.</span>
            <span>Made with</span>
            <span class="text-red-500 animate-pulse">❤️</span>
            <span>and lots of</span>
            <span class="text-yellow-500">☕</span>
          </div>

          <div class="flex items-center space-x-6 text-sm">
            <a href="/privacy" class="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" class="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <div class="flex items-center space-x-1 text-gray-400">
              <span>Built with</span>
              <span class="text-blue-400 font-medium">Qwik</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick$={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <svg class="w-6 h-6 mx-auto group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
});
