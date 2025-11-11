import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      disabled: true, // 🚫 disables entire Pages dropdown
      items: [
        {
          title: "Landing",
          href: "/landing",
          description: "A landing page template with differents sections.",
          image: "/images/examples/landing.jpg",
          disabled: true,
        },
        {
          title: "Changelog",
          href: "/releases",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/changelog.jpg",
          disabled: true,
        },
        {
          title: "Waitlist",
          href: "/waitlist",
          description:
            "A waitlist form using Astro DB, React Hook Form & Sonner. Static page.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
          disabled: true,
        },
        {
          title: "Pricing",
          href: "/pricing",
          description: "Pricing cards, FAQs and more content with price.",
          image: "/images/examples/pricing.jpg",
          disabled: true,
        },
        {
          title: "About",
          href: "/about",
          description: "A simple page with a masonry gallery and little text.",
          image: "/images/examples/about.jpg",
          disabled: true,
        },
        {
          title: "Newsletter",
          href: "/newsletter",
          description:
            "A newsletter form using Astro DB & Simple Stack Form. Counter display!",
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
            "Implement an authentification using Astro DB & Lucia",
          disabled: true,
        },
      ],
    },
  ],

  links: [
    // You can still add or show single links if you want
    // {
    //   title: "TWERK.DANCE Home",
    //   href: "/",
    //   description: "Back to homepage",
    // },
  ],
};
