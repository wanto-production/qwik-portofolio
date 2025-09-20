import { component$ } from '@builder.io/qwik';
import { routeAction$, Form, type DocumentHead } from "@builder.io/qwik-city";
import { QBlurText } from "~/components/react/text-blur";
import { QLightRays } from "~/components/react/light-ray";
import nodemailer from "nodemailer"

const sendEmail = routeAction$(async (data, requestEvent) => {
  try {
    // Konfigurasi transporter Gmail (bisa juga pakai SMTP lain)
    const transporter = nodemailer.createTransport({
      service: "gmail", // atau "hotmail", "yahoo"
      auth: {
        user: requestEvent.env.get('PRIVATE_EMAIL_USER'), // simpan di vercel env
        pass: requestEvent.env.get('PRIVATE_EMAIL_PASS'),
      },
    });

    // Email yang dikirim
    await transporter.sendMail({
      from: `"${String(data.name)}" <${String(data.email)}>`,
      to: requestEvent.env.get('PRIVATE_EMAIL_USER'),
      subject: String(data.subject),
      text: `
Kamu menerima pesan baru dari portofolio:

Nama   : ${data.name}
Email  : ${data.email}
Subjek : ${data.subject}
Pesan  :
${data.message}

------------------------
Ini dikirim otomatis dari form kontak portofolio
`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #1a73e8;">📩 Pesan Baru dari Portofolio</h2>
      <p><strong>Nama:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subjek:</strong> ${data.subject}</p>
      <p><strong>Pesan:</strong><br/>${String(data.message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="font-size: 0.9em; color: #666;">Ini dikirim otomatis dari form kontak portofolio</p>
    </div>
  `,

    });

    return { success: true };
  } catch (err) {
    return { success: false, error: String(err) };
  }
})

export default component$(() => {
  const action = sendEmail()


  const contactMethods = [
    {
      icon: (
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'hello@ikhwansatrio.dev',
      href: 'mailto:hello@ikhwansatrio.dev',
      description: 'Drop me a line anytime'
    },
    {
      icon: (
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      title: 'GitHub',
      value: '@wanto-production',
      href: 'https://github.com/wanto-production',
      description: 'Check out my code'
    },
    {
      icon: (
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065a2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: 'LinkedIn',
      value: 'Ikhwan Satrio',
      href: 'https://linkedin.com/in/ikhwan-satrio',
      description: 'Let\'s connect professionally'
    },
    {
      icon: (
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775a4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827a4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      title: 'Twitter',
      value: '@ikhwansatrio',
      href: 'https://twitter.com/ikhwansatrio',
      description: 'Follow me for updates'
    }
  ];

  const faqs = [
    {
      question: 'What kind of projects do you work on?',
      answer: 'I specialize in web applications using modern frameworks like Qwik, React, and Svelte. I also work on mobile apps, UI/UX design, and open-source projects.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I always provide detailed timelines during consultation.'
    },
    {
      question: 'Do you work with remote clients?',
      answer: 'Absolutely! I work with clients globally and have experience collaborating remotely. I use tools like Slack, Discord, and video calls to ensure smooth communication.'
    },
    {
      question: 'What\'s your preferred tech stack?',
      answer: 'I love working with Qwik for performance-critical apps, React for complex UIs, Svelte for lightweight projects, and TypeScript for everything. I also use Tailwind CSS, Node.js, and various databases.'
    }
  ];

  return (
    <main class="w-full min-h-screen">
      {/* Hero Section */}
      <section class="relative w-full h-screen text-center flex flex-col items-center justify-center gap-8 bg-[radial-gradient(circle_at_center,_#1a1a1a,_#0c0c0c)] overflow-hidden">
        {/* Background Rays */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: 1 }}>
          <QLightRays
            raysOrigin="top-center"
            raysColor="#ffff"
            raysSpeed={0.8}
            lightSpread={0.4}
            rayLength={0.6}
            followMouse
            mouseInfluence={0.05}
            noiseAmount={0.1}
            distortion={0.03}
            className="custom-rays pointer-events-none"
          />
        </div>

        {/* Content */}
        <div class="relative z-10 space-y-8">
          <div class="flex flex-col items-center justify-center text-center space-y-6">
            <QBlurText
              text="Let's Work Together"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-poppins text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 bg-clip-text text-transparent p-3"
            />

            <p class="font-inter text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear from you. Let's discuss how we can bring your ideas to life
            </p>
          </div>

          {/* Quick Contact */}
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:ikwansatria3974@gmail.com"
              class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Send me an Email
            </a>
            <div class="text-gray-400 text-sm">or fill out the form below</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div class="flex flex-col items-center animate-bounce">
            <span class="text-gray-400 text-sm mb-2">Get in Touch</span>
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section class="w-full bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a] py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Send me a Message
                </h2>
                <p class="text-gray-400 text-lg">
                  Fill out this form and I'll get back to you within 24 hours
                </p>
              </div>

              <Form action={action} class="space-y-6">
                {/* Name & Email Row */}
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name='name'
                      required
                      class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name='email'
                      required
                      class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name='subject'
                    required
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                {/* Message */}
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name='message'
                    required
                    rows={6}
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={action.isRunning}
                    class={`w-full px-8 py-4 rounded-xl font-medium text-white transition-all duration-300
                      ${action.isRunning
                        ? 'bg-gray-600 cursor-not-allowed'
                        : action.value?.success
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105'
                      }`}
                  >
                    {action.isRunning ? (
                      <div class="flex items-center justify-center gap-2 animate-pulse">
                        <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-dasharray="31.4" stroke-dashoffset="0"></circle>
                        </svg>
                        Sending...
                      </div>
                    ) : action.value?.success ? (
                      <div class="flex items-center justify-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

                {action.value?.success ? (
                  <div class="p-4 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 text-sm">
                    Thanks for reaching out! I'll get back to you soon.
                  </div>
                ) : action.value?.error && (
                  <div class="p-4 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-sm">
                    {action.value?.error}
                  </div>
                )}
              </Form>
            </div>

            {/* Contact Info */}
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Get in Touch
                </h2>
                <p class="text-gray-400 text-lg">
                  Prefer to reach out directly? Here are the best ways to contact me
                </p>
              </div>

              {/* Contact Methods */}
              <div class="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={method.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    class="group block p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300"
                  >
                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                        {method.icon}
                      </div>
                      <div class="flex-1">
                        <h3 class="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-1">
                          {method.value}
                        </p>
                        <p class="text-gray-500 text-sm">
                          {method.description}
                        </p>
                      </div>
                      <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div class="p-6 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-2xl border border-green-600/30">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 class="font-semibold text-white">Currently Available</h3>
                </div>
                <p class="text-gray-300 text-sm leading-relaxed">
                  I'm currently taking on new projects and collaborations.
                  Response time is typically within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="w-full bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c] py-20">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p class="text-gray-400 text-lg">
              Quick answers to common questions about working together
            </p>
          </div>

          <div class="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                class="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm"
              >
                <h3 class="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p class="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="w-full bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a] py-20">
        <div class="max-w-4xl mx-auto text-center px-6">
          <div class="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Ready to Start Your Project?
            </h2>
            <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you have a clear vision or just an idea, I'm here to help bring it to life.
              Let's create something amazing together.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@ikhwansatrio.dev"
                class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start the Conversation
              </a>
              <a
                href="/projects"
                class="px-8 py-3 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Contact",
  meta: [
    {
      name: "description",
      content: "Get in touch with Ikhwan Satrio - Frontend Developer. Contact me for web development projects, collaborations, or just to say hello. Available for freelance work and exciting opportunities.",
    },
  ],
};
