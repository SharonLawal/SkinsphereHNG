module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {borderRadius: {
        'custom': '16px 16px 16px px',
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "scale-up": "scale-up 0.5s ease-out forwards",
        "pulse-subtle": "pulse-subtle 2s infinite ease-in-out",
        "pop-in": "pop-in 0.4s ease-out forwards",
        "drawer-open-left": "drawer-open-left 0.3s ease-out forwards",
        "drawer-close-left": "drawer-close-left 0.3s ease-in forwards",
        "slide-down": "slide-down 0.4s ease-out forwards",
        // New animations for this batch:
        "spin-slow": "spin 3s linear infinite",
        "slide-up-fade": "slide-up-fade 0.5s ease-out forwards",
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "slide-in-right": { "0%": { transform: "translateX(20px)", opacity: "0" }, "100%": { transform: "translateX(0)", opacity: "1" } },
        "slide-in-left": { "0%": { transform: "translateX(-20px)", opacity: "0" }, "100%": { transform: "translateX(0)", opacity: "1" } },
        "scale-up": { "0%": { transform: "scale(0.95)", opacity: "0.8" }, "100%": { transform: "scale(1)", opacity: "1" } },
        "pulse-subtle": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.02)" } },
        "pop-in": { "0%": { opacity: "0", transform: "scale(0.9)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "drawer-open-left": { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(0)" } },
        "drawer-close-left": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-100%)" } },
        "slide-down": { "0%": { opacity: "0", transform: "translateY(-10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        // New keyframes:
        "spin": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } }, // Ensure spin is defined if not already
        "slide-up-fade": { "0%": { opacity: "0", transform: "translateY(10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};