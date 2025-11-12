import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["CalSans Semibold", ...defaultTheme.fontFamily.sans],
      },
      height: {
        18: "4.5rem",
      },
      spacing: {
        18: "4.5rem",
      },
      colors: {
        // 🎨 Updated colors with nude background for light mode
        background: {
          DEFAULT: "#F3EFE3", // Changed from #ffffff to your nude color
          dark: "#000000", // Dark mode remains black
          200: "hsl(var(--background-200, 220 14% 96%))",
        },
        foreground: {
          DEFAULT: "#111111",
          dark: "#f5f5f5",
        },
        border: "hsl(var(--border, 240 5% 84%))",
        input: "hsl(var(--input, 240 4% 90%))",
        ring: "hsl(var(--ring, 240 4% 65%))",

        primary: {
          DEFAULT: "hsl(var(--primary, 258 90% 60%))",
          foreground: "hsl(var(--primary-foreground, 0 0% 100%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 240 5% 96%))",
          foreground: "hsl(var(--secondary-foreground, 240 5% 20%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0 85% 60%))",
          foreground: "hsl(var(--destructive-foreground, 0 0% 98%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 240 5% 95%))",
          foreground: "hsl(var(--muted-foreground, 240 5% 25%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 250 100% 75%))",
          foreground: "hsl(var(--accent-foreground, 0 0% 0%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 0 0% 100%))",
          foreground: "hsl(var(--popover-foreground, 240 5% 10%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 0 0% 100%))",
          foreground: "hsl(var(--card-foreground, 240 10% 10%))",
        },
      },
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate, typography],
};