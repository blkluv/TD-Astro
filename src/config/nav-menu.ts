export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      disabled: false,
      style: "font-bold text-black", // ✅ Added bold black
      items: [
        {
          title: "Social",
          href: "https://bio.twerk.dance",
          description: "A social media for only Twerkrz and Fans.",
          image: "/images/examples/landing.jpg",
          disabled: false,
          style: "font-bold text-black" // ✅ Added bold black
        },
        {
          title: "Challenges",
          href: "/releases",
          description: "TikTok Challenges to Win Solana $WATAA.",
          image: "/images/examples/changelog.jpg",
          disabled: false,
          style: "font-bold text-black" // ✅ Added bold black
        },
        {
          title: "YE OR NO",
          href: "https://yeno.twerk.dance",
          description: "A prediction market for Twerkz and Fans to bet on the next big thing.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
          disabled: false,
          style: "font-bold text-black" // ✅ Added bold black
        },
        {
          title: "WATAA.MENU",
          href: "https://wataa.menu",
          description: "Chat with a Twerkr in exchange for Solana $WATAA. Aka The WATAA Cooler.",
          image: "/images/examples/pricing.jpg",
          disabled: false,
          style: "font-bold text-black" // ✅ Added bold black
        },
        {
          title: "About",
          href: "/about",
          description: "A lil something about us.",
          image: "/images/examples/about.jpg",
          disabled: true,
          style: "font-bold text-black" // ✅ Added bold black
        },
        {
          title: "TOK",
          href: "https://tok.twerk.dance",
          description: "A TikTok-like platform for Twerkrz and Fans to share and sell their content.",
          image: "/images/examples/newsletter.jpg",
          disabled: true,
          style: "font-bold text-black" // ✅ Added bold black
        },
      ],
    },
  ],

  examplesNav: [
    {
      title: "Examples",
      disabled: true,
      style: "font-bold text-black", // ✅ Added bold black
      items: [
        // ... your example items with style property
      ],
    },
  ],

  links: [],
};