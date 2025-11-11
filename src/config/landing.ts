// src/config/landing.ts
import type { InfoLdg } from "@/types";

// 🧠 Extend InfoLdg list item type to support emojis + links safely
type InfoLdgWithLinks = Omit<InfoLdg, "list"> & {
  list: {
    title: string;
    description: string;
    icon: string; // now supports emoji or lucide icon
    link?: string;
  }[];
};

export const infos: InfoLdgWithLinks[] = [
  {
    title: "💃 SOCIAL FOR TWERKRZ",
    description:
      "We are a social media platform designed for twerk enthusiasts. Our mission is to create a vibrant and inclusive tribe where twerk lovers can connect, share their passion, and celebrate the art of twerking.",
    image: "/images/blog/placeholder-about.jpg",
    list: [
      {
        title: "🏠 Remote Work",
        description: "Work from home or anywhere in the world.",
        icon: "🏠",
        link: "https://bio.twerk.dance",
      },
      {
        title: "💎 Tokenized Content",
        description: "One image tokenized as a digital asset sold for $90M.",
        icon: "💎",
        link: "https://bio.twerk.dance",
      },
      {
        title: "🛍️ Market",
        description:
          "Discover 1-OF-1 Digital A$$et Collectibles and unique livestream experiences.",
        icon: "🛍️",
        link: "https://bio.twerk.dance",
      },
    ],
  },
  {
    title: "⚡ SEAMLESS INTEGRATION",
    description:
      "Integrate our open-source Web5 tools seamlessly into your TWERK.DANCE experience. Connect your Phantom Wallet 🏦 + What3Words 📍 for proof-of-twerk.",
    image: "/images/blog/placeholder-about.jpg",
    list: [
      {
        title: "🪩 Flexible",
        description:
          "Customize your integrations to fit your unique twerk style.",
        icon: "🪩",
        link: "https://bio.twerk.dance",
      },
      {
        title: "🚀 Efficient",
        description: "Streamline your processes and reduce manual effort.",
        icon: "🚀",
        link: "https://bio.twerk.dance",
      },
      {
        title: "🔒 Reliable",
        description:
          "Rely on our secure blockchain infrastructure for every ReelView.",
        icon: "🔒",
        link: "https://bio.twerk.dance",
      },
    ],
  },
];

// 🪩 Keep your other exports unchanged below ↓

export const features = [
  {
    title: "💃 Will Stormiiy receive ₿1,000 in $WATAA by 12/1/25?",
    description:
      "Lock in your YE ✅ or NO ❌. Every prediction fuels the creator economy — payouts verified on-chain via Solana Phantom 🏦 testnet.",
    link: "https://yeno.twerk.dance",
  },
  {
    title: "🎙️ Will Ice Spice join TWERK.DANCE by 2026?",
    description:
      "Lock in your YE ✅ or NO ❌. Every prediction fuels the creator economy — payouts verified on-chain via Solana Phantom 🏦 testnet",
    link: "https://yeno.twerk.dance",
  },
  {
    title: "🏆 Will the #TwerkMerica TikTok Effect flag break 1 million views?",
    description:
      "Lock in your YE ✅ or NO ❌. Every prediction fuels the creator economy — payouts verified on-chain via Solana Phantom 🏦 testnet",
    link: "https://yeno.twerk.dance",
  },
  {
    title: "💸 Will Bitcoin $WATTA hit 10 BTC in trading volume by 2026?",
    description:
      "Lock in your YE ✅ or NO ❌. Every prediction fuels the creator economy — payouts verified on-chain via Solana Phantom 🏦 testnet",
    link: "https://yeno.twerk.dance",
  },
  {
    title: "🪩 Will any Twerkr sell a 7-figure NFT before year-end?",
    description:
      "Lock in your YE ✅ or NO ❌. Every prediction fuels the creator economy — payouts verified on-chain via Solana Phantom 🏦 testnet",
    link: "https://yeno.twerk.dance",
  },
  {
    title: "🌈 Will YENO outperform Solana in 2026?",
    description:
      "Cast your YE or NO on the ultimate chain rivalry. All wagers transparently tracked across Base + BTC.",
    link: "https://yeno.twerk.dance",
  },
];

export const testimonials = [
  {
    name: "💃 BIO.TWERK.DANCE",
    job: "Social for Twerkrz",
    image: "/images/blog/placeholder-about.jpg",
    review:
      "Join the Web5 social network built for Twerkrz and fans. Stream, earn, and connect — verified by Phantom 🏦 + What3Words 📍.",
    link: "https://bio.twerk.dance",
    cta: "Create Your Bio",
  },
  {
    name: "🏆 MARKET",
    job: "OpenSea Marketplace",
    image: "/images/blog/placeholder-about.jpg",
    review:
      "Twerkrz can earn 5% royalties on secondary sales of their twerk NFTs flipped. Buy, sell, and collect 1-of-1 digital assets on OpenSea.",
    link: "https://opensea.io/collection/twerk-dance",
    cta: "Buy Twerk Skins",
  },
  {
    name: "🎵 TOK.TWERK.DANCE",
    job: "Scroll and Buy Tokenized Content",
    image: "/images/blog/placeholder-about.jpg",
    review:
      "Twerk TOK is a tokenized content platform where you can buy, sell, and collect 1-of-1 digital assets. Own your twerk moments.",
    link: "https://tok.twerk.dance",
    cta: "TikTok Your Twerk",
  },
  {
    name: "📺 NFTV.TWERK.DANCE",
    job: "YouTube for Twerking",
    image: "/images/blog/placeholder-about.jpg",
    review:
      "We built a Bitcoin NFT video platform for Twerkers. Upload, monetize, and share your twerk videos with the world to earn Bitcoin Zap tips.",
    link: "https://mic.twerk.dance",
    cta: "4 Play Twerk Videos",
  },
  {
    name: "💸 WATAA.MENU",
    job: "Solana chat $WATAA tip menu",
    image: "/images/blog/placeholder-about.jpg",
    review:
      "Chat about how much Solana $WATAA you need before booking a Livestream.",
    link: "https://market.twerk.dance",
    cta: "Chat with WATAA",
  },
  {
    name: "💎 GEMZ.TWERK.DANCE",
    job: "Polkadot Kusuma NFT Marketplace",
    image: "/images/blog/placeholder-about.jpg",
    review:
      "Tokenized selfies on Polkadot Kusama. Buy, sell, and collect 1-of-1 NFTs with $KSM.",
    link: "https://gemz.twerk.dance",
    cta: "HODL GEMZ",
  },
];
