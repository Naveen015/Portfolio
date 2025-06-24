import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Message = {
  sender: "user" | "bot";
  text: string;
};

