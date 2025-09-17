import { FaGithub } from "react-icons/fa"
import { qwikify$ } from "@builder.io/qwik-react";

export const QFaGithub = qwikify$(FaGithub, { eagerness: "load" })
