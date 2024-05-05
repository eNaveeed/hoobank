import { nanoid } from "nanoid";
import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: nanoid(),
    title: "Home",
  },
  {
    id: nanoid(),
    title: "Features",
  },
  {
    id: nanoid(),
    title: "Product",
  },
  {
    id: nanoid(),
    title: "Clients",
  },
];

export const features = [
  {
    id: nanoid(),
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: nanoid(),
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: nanoid(),
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: nanoid(),
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: nanoid(),
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: nanoid(),
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: nanoid(),
    title: "User Active",
    value: "3800+",
  },
  {
    id: nanoid(),
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: nanoid(),
    value: "$230M+",
    title: "Transaction",
  },
];

export const footerLinks = [
  {
    id: nanoid(),
    title: "Useful Links",
    links: [
      {
        id: nanoid(),
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        id: nanoid(),
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        id: nanoid(),
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        id: nanoid(),
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        id: nanoid(),
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Community",
    links: [
      {
        id: nanoid(),
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        id: nanoid(),
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        id: nanoid(),
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        id: nanoid(),
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        id: nanoid(),
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Partner",
    links: [
      {
        id: nanoid(),
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        id: nanoid(),
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: nanoid(),
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: nanoid(),
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: nanoid(),
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: nanoid(),
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: nanoid(),
    logo: airbnb,
  },
  {
    id: nanoid(),
    logo: binance,
  },
  {
    id: nanoid(),
    logo: coinbase,
  },
  {
    id: nanoid(),
    logo: dropbox,
  },
];
