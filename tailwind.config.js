/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0056b3",
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c2ff",
          300: "#66a3ff",
          400: "#3385ff",
          500: "#0066ff",
          600: "#0056b3",
          700: "#004080",
          800: "#002b53",
          900: "#001526",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ff6b00",
          50: "#fff5e6",
          100: "#ffebcc",
          200: "#ffd699",
          300: "#ffc266",
          400: "#ffad33",
          500: "#ff9900",
          600: "#ff6b00",
          700: "#cc5500",
          800: "#994000",
          900: "#662b00",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#00c875",
          50: "#e6fff5",
          100: "#ccffeb",
          200: "#99ffd6",
          300: "#66ffc2",
          400: "#33ffad",
          500: "#00ff99",
          600: "#00c875",
          700: "#009655",
          800: "#006436",
          900: "#003218",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ff3b30",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-ring": "pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('https://images.unsplash.com/photo-1523527676640-a738bddf657c?w=1920&auto=format&fit=crop')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "dot-pattern": "radial-gradient(circle, #00000010 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
