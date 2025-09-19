import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main>

    </main>
  )
})

export const head: DocumentHead = {
  title: "Projects",
  meta: [
    {
      name: "description",
      content: "Ikhwan Satrio Projects - Page for show all my projects",
    },
  ],
};
