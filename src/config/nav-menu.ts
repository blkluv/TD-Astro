import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      disabled: false,
      items: [  // ✅ added "items" array wrapper (was missing)
        {
          title: "Social",
          href: "https://bio.twerk.dance",
          description: "A social media for only Twerkrz and Fans.",
          image: "/images/examples/landing.jpg",
          disabled: false,
        },
        {
          title: "Challenges",
          href: "/releases",
          description: "TikTok Challenges to Win Solana $WATAA.",
          image: "/images/examples/changelog.jpg",
          disabled: false,
        },
        {
          title: "YE OR NO",
          href: "https://yeno.twerk.dance",
          description:
            "A prediction market for Twerkz and Fans to bet on the next big thing.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
          disabled: false,
        },
        {
          title: "WATAA.MENU",
          href: "https://wataa.menu",
          description:
            "Chat with a Twerkr in exchange for Solana $WATAA. Aka The WATAA Cooler.",
          image: "/images/examples/pricing.jpg",
          disabled: false,
        },
        {
          title: "About",
          href: "/about",
          description: "A lil something about us.",
          image: "/images/examples/about.jpg",
          disabled: true,
        },
        {
          title: "TOK",
          href: "https://tok.twerk.dance",
          description:
            "A TikTok-like platform for Twerkrz and Fans to share and sell their content.",
          image: "/images/examples/newsletter.jpg",
          disabled: true,
        },
      ],
    },
  ],

  examplesNav: [
    {
      title: "Examples",
      disabled: true, // 🚫 disables entire Examples dropdown
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg",
          disabled: true,
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
          disabled: true,
        },
        {
          title: "Anime List",
          href: "/animes",
          description:
            "Fetch anime content from a graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          launched: true,
          disabled: true,
        },
        {
          title: "Blog DB",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/products",
          description: "Ecommerce pages fetching data from an API.",
          disabled: true,
        },
        {
          title: "Authentification",
          href: "/auth",
          description:
            "Implement an authentification using Astro DB & Lucia.",
          disabled: true,
        },
      ],
    },
  ],

  links: [],
};
