import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://recollect.top/",
  author: "HYH!",
  desc: `HYH's personal blog website.`,
  title: `HYH's Blog`,
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["zh-CN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
];
