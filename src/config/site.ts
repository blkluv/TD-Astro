import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "TWERK.DANCE",
  description:
    "We made twerking a blockchain sport powered by $WATAA",
  url: "https://twerk.dance",
  ogImage: "https://bio.twerk.dance/wp-content/uploads/2025/11/TWERK.DANCE-1080.png",
  links: {
    twitter: "https://twitter.com/twerkdancerz",
    github: "https://github.com/mickasmt/astro-nomy",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];