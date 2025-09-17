import { Slot, component$ } from "@builder.io/qwik";
import { Header } from "~/components/header";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <>
    <Header />
    <Slot />
  </>
})

export const head: DocumentHead = ({ head }) => {
  return {
    title: `ikhwan - ${head.title}`,
  };
};
