import { component$, useSignal } from "@builder.io/qwik";
import Image from "~/assets/favicon.png?jsx";
import { QFaGithub } from "./icons";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  const isOpen = useSignal(false);

  return (
    <header class="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl flex flex-col items-center z-50">
      {/* Floating Bar */}
      <div class="w-full h-[60px] flex items-center justify-between px-6 
                  bg-[#0c0c0c]/80 backdrop-blur-md border border-gray-700 
                  rounded-2xl shadow-lg">
        {/* Logo */}
        <div class="flex items-center gap-2">
          <Image class="h-[36px] w-auto" />
          <span class="hidden sm:inline font-poppins font-semibold text-white">
            Ikhwan Satrio
          </span>
        </div>

        {/* Desktop Nav */}
        <nav class="hidden md:flex items-center gap-8 font-inter text-gray-300 text-sm">
          <Link href="/" class="hover:text-white transition">Home</Link>
          <Link href="/about" class="hover:text-white transition">About</Link>
          <Link href="/projects" class="hover:text-white transition">Projects</Link>
          <Link href="/contact" class="hover:text-white transition">Contact</Link>
        </nav>

        {/* Github Button (Desktop) */}
        <a
          href="https://github.com/wanto-production"
          target="_blank"
          class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                 font-medium hover:opacity-90 transition"
        >
          <QFaGithub />
          Github
        </a>

        {/* Mobile Toggle */}
        <button
          class="md:hidden text-gray-300 hover:text-white"
          onClick$={() => (isOpen.value = !isOpen.value)}
        >
          <i class={`fa-solid ${isOpen.value ? "fa-xmark" : "fa-bars"} text-xl`} />
        </button>
      </div>


      {/* Mobile Nav (Dropdown card style) */}
      <div
        class={`md:hidden absolute top-[72px] left-1/2 -translate-x-1/2 w-[90%] 
          bg-[#0c0c0c]/95 backdrop-blur-md border border-gray-700 
          rounded-2xl shadow-lg flex flex-col items-center gap-4 py-6 
          transition-all duration-300 z-40
          ${isOpen.value
            ? "opacity-100 scale-100 visible pointer-events-auto"
            : "opacity-0 scale-95 invisible pointer-events-none"
          }`}
      >
        <Link href="/" class="text-gray-300 hover:text-white font-medium">Home</Link>
        <Link href="/about" class="text-gray-300 hover:text-white font-medium">About</Link>
        <Link href="/projects" class="text-gray-300 hover:text-white font-medium">Projects</Link>
        <Link href="/contact" class="text-gray-300 hover:text-white font-medium">Contact</Link>
        <Link
          href="https://github.com/wanto-production"
          target="_blank"
          class="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r 
           from-blue-600 to-purple-600 text-white font-medium 
           hover:opacity-90 transition"
        >
          <QFaGithub />
          Github
        </Link>
      </div>
    </header>
  );
});
